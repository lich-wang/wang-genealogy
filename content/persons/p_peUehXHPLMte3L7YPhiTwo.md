---
schema: wang-person/v1
id: p_peUehXHPLMte3L7YPhiTwo
status: active
merged_into: null
display_name: 王夢鯉
cbdb_id: 206856
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_j6HVKEotPk8sqToBcRwYag
        subject_person_id: p_peUehXHPLMte3L7YPhiTwo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢鯉（生于1559年），史料所见人物。本项目依据《中国历代人物传记资料库：王夢鯉（CBDB 206856）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_TMMUnf9Hp0iNw6n5LYFjKL
          claim_id: c_j6HVKEotPk8sqToBcRwYag
          source_id: s_E1jjwYRbVrkMvGbo7xdGtT
          stance: supports
          locator: CBDB:206856
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_E1jjwYRbVrkMvGbo7xdGtT
            source_type: api_record
            title: 中国历代人物传记资料库：王夢鯉（CBDB 206856）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206856&o=json
            external_identifier: CBDB:206856
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8gn9hJEM9wsnuBbRqvSDMR
        subject_person_id: p_peUehXHPLMte3L7YPhiTwo
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1559年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1559-01-01
            latest: 1559-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sbe47vsBUbZy21eHdiKWhV
          claim_id: c_8gn9hJEM9wsnuBbRqvSDMR
          source_id: s_E1jjwYRbVrkMvGbo7xdGtT
          stance: supports
          locator: CBDB:206856
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1559
          source:
            id: s_E1jjwYRbVrkMvGbo7xdGtT
            source_type: api_record
            title: 中国历代人物传记资料库：王夢鯉（CBDB 206856）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206856&o=json
            external_identifier: CBDB:206856
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_j2stk8bwhNx2JnicZaJS2Y
        subject_person_id: p_peUehXHPLMte3L7YPhiTwo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢鯉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MdpR7zNZqDX8dX2yPa6XhX
          claim_id: c_j2stk8bwhNx2JnicZaJS2Y
          source_id: s_E1jjwYRbVrkMvGbo7xdGtT
          stance: supports
          locator: CBDB:206856
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1559
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_CxkCfMWmASpxOQNEJZVVtC
        subject_person_id: p_tA8L9oJKVbRZ4sRbvb6FuX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_peUehXHPLMte3L7YPhiTwo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p-yDIggCe_v5n5R0zL4fix
          claim_id: c_CxkCfMWmASpxOQNEJZVVtC
          source_id: s_mQ4RCV9yNwXSJB7RWoQ177
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第一百二十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mQ4RCV9yNwXSJB7RWoQ177
            source_type: api_record
            title: 中国历代人物传记资料库：王三重（CBDB 224183）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224183&o=json
            external_identifier: CBDB:224183
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.431Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_tA8L9oJKVbRZ4sRbvb6FuX
        status: active
        display_name: 王三重
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_PvE-jx5EMMVvBj5eLXb__b
        subject_person_id: p_rR2Vb83Q6ZaGGSTqc9JxCb
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_peUehXHPLMte3L7YPhiTwo
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kVDxecQyeDR0K9nKrCDN5y
          claim_id: c_PvE-jx5EMMVvBj5eLXb__b
          source_id: s_3uPMiQfLMzWUXAExJU6DC9
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第一百二十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3uPMiQfLMzWUXAExJU6DC9
            source_type: api_record
            title: 中国历代人物传记资料库：王軻（CBDB 224180）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224180&o=json
            external_identifier: CBDB:224180
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.429Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_rR2Vb83Q6ZaGGSTqc9JxCb
        status: active
        display_name: 王軻
        merged_into_person_id: null
    - claim:
        id: c_4Yzz2qejcvthZr5eQjIcFV
        subject_person_id: p_M9GFfQNvhfqf17cR9gcQrW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_peUehXHPLMte3L7YPhiTwo
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jx9ijYBeCj2uA6dcyjmSv0
          claim_id: c_4Yzz2qejcvthZr5eQjIcFV
          source_id: s_feCCSJAmwaZNEBAN2nCFP2
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第一百二十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_feCCSJAmwaZNEBAN2nCFP2
            source_type: api_record
            title: 中国历代人物传记资料库：王亳（CBDB 224182）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224182&o=json
            external_identifier: CBDB:224182
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_M9GFfQNvhfqf17cR9gcQrW
        status: active
        display_name: 王亳
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王夢鯉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王夢鯉（生于1559年），史料所见人物。本项目依据《中国历代人物传记资料库：王夢鯉（CBDB 206856）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1559年 | accepted |
| name.primary | 王夢鯉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tA8L9oJKVbRZ4sRbvb6FuX | 王三重 | accepted |
| ancestors | p_rR2Vb83Q6ZaGGSTqc9JxCb | 王軻 | accepted |
| ancestors | p_M9GFfQNvhfqf17cR9gcQrW | 王亳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王亳（CBDB 224182）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224182&o=json)
- [中国历代人物传记资料库：王軻（CBDB 224180）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224180&o=json)
- [中国历代人物传记资料库：王夢鯉（CBDB 206856）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206856&o=json)
- [中国历代人物传记资料库：王三重（CBDB 224183）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224183&o=json)
