---
schema: wang-person/v1
id: p_cb2pzan14ZR1ECvrVUNese
status: active
merged_into: null
display_name: 王胡
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZxtxVNTGdQFAwosKLnTVWJ
        subject_person_id: p_cb2pzan14ZR1ECvrVUNese
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王胡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9w63dS7Nf5kpCuaybNf8C8
          claim_id: c_ZxtxVNTGdQFAwosKLnTVWJ
          source_id: s_mtoajfRU5iL74uCLWmM7bH
          stance: supports
          locator: CBDB:142838
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142838）
          source: &a1
            id: s_mtoajfRU5iL74uCLWmM7bH
            source_type: api_record
            title: 中国历代人物传记资料库：王胡（CBDB 142838）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142838&o=json
            external_identifier: CBDB:142838
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.217Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_NKfgCBML4nDaFFXDUyJ49Z
        subject_person_id: p_cb2pzan14ZR1ECvrVUNese
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 634年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XWMrxd814gqanmratT8qJj
          claim_id: c_NKfgCBML4nDaFFXDUyJ49Z
          source_id: s_mtoajfRU5iL74uCLWmM7bH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_H9pczE2Cwz5pSBCPX6Af8n
        subject_person_id: p_cb2pzan14ZR1ECvrVUNese
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 714年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JCidnvMBA2DXj3kVdnCAn9
          claim_id: c_H9pczE2Cwz5pSBCPX6Af8n
          source_id: s_mtoajfRU5iL74uCLWmM7bH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BZuMmaZUj9WkuLynH51xE5
        subject_person_id: p_cb2pzan14ZR1ECvrVUNese
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为周人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tBP7UFU7zMRSnvY2jc58fF
          claim_id: c_BZuMmaZUj9WkuLynH51xE5
          source_id: s_mtoajfRU5iL74uCLWmM7bH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_D0P1KDoeH0YGIJvMY_33y4
        subject_person_id: p_v8dSrbidp2g7Lghcz9wesN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cb2pzan14ZR1ECvrVUNese
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XTQJio8eDigS65zVnPIaUE
          claim_id: c_D0P1KDoeH0YGIJvMY_33y4
          source_id: s_mtoajfRU5iL74uCLWmM7bH
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Kaiyuan6：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_v8dSrbidp2g7Lghcz9wesN
        status: active
        display_name: 王胡仁
        merged_into_person_id: null
  children:
    - claim:
        id: c_HR_RahRWojxa5Z7Xh9oql6
        subject_person_id: p_cb2pzan14ZR1ECvrVUNese
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BY6pA4PHTVb3LmiTYxbcFF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vQNkSY-8anFxJN7iuhDH6M
          claim_id: c_HR_RahRWojxa5Z7Xh9oql6
          source_id: s_qP7FJULxKBKkLznSMQida4
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Kaiyuan6：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qP7FJULxKBKkLznSMQida4
            source_type: api_record
            title: 中国历代人物传记资料库：王思禮（CBDB 163701）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163701&o=json
            external_identifier: CBDB:163701
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.961Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BY6pA4PHTVb3LmiTYxbcFF
        status: active
        display_name: 王思禮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_6EPcehVUBLvBghODYOlOFL
        subject_person_id: p_cb2pzan14ZR1ECvrVUNese
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ULdAz8jQLPmu4CmVF34TM1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TXcyZeLeVuyjZjue7L3dUR
          claim_id: c_6EPcehVUBLvBghODYOlOFL
          source_id: s__rSjcgb7Unf0IWbI8HCOb3
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Kaiyuan6：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s__rSjcgb7Unf0IWbI8HCOb3
            source_type: api_record
            title: 中国历代人物传记资料库：郭氏(王胡妻)（CBDB 163699）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163699&o=json
            external_identifier: CBDB:163699
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ULdAz8jQLPmu4CmVF34TM1
        status: active
        display_name: 郭氏
        merged_into_person_id: null
    - claim:
        id: c_qbTqCWYQl4b4aaI4x_CZ3A
        subject_person_id: p_cb2pzan14ZR1ECvrVUNese
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ZJx55htsCzvqQx9NKbdtiR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lX1yaoMObM11tmqwrTjVgy
          claim_id: c_qbTqCWYQl4b4aaI4x_CZ3A
          source_id: s_GFw5cd_ATfUq0-2ddxyqns
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Kaiyuan6：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GFw5cd_ATfUq0-2ddxyqns
            source_type: api_record
            title: 中国历代人物传记资料库：郭氏(王胡妻)（CBDB 163700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163700&o=json
            external_identifier: CBDB:163700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ZJx55htsCzvqQx9NKbdtiR
        status: active
        display_name: 郭氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王胡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王胡 | accepted |
| birth.date | 634年 | accepted |
| death.date | 714年 | accepted |
| bio.summary | CBDB 记载为周人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_v8dSrbidp2g7Lghcz9wesN | 王胡仁 | accepted |
| children | p_BY6pA4PHTVb3LmiTYxbcFF | 王思禮 | accepted |
| spouses | p_ULdAz8jQLPmu4CmVF34TM1 | 郭氏 | accepted |
| spouses | p_ZJx55htsCzvqQx9NKbdtiR | 郭氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：郭氏(王胡妻)（CBDB 163699）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163699&o=json)
- [中国历代人物传记资料库：郭氏(王胡妻)（CBDB 163700）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163700&o=json)
- [中国历代人物传记资料库：王胡（CBDB 142838）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142838&o=json)
- [中国历代人物传记资料库：王思禮（CBDB 163701）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163701&o=json)
