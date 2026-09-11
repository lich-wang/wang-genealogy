---
schema: wang-person/v1
id: p_88N8F7QC67BDANQ41w4EaZ
status: active
merged_into: null
display_name: 王顯仁
cbdb_id: 206702
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w3JzrzmcpeJJMzZ24HT6Uk
        subject_person_id: p_88N8F7QC67BDANQ41w4EaZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯仁（生于1547年），明人物。中国历代人物传记资料库（CBDB）以人物编号 206702 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_h4_tYf4QGOwgOB4luSfWmW
          claim_id: c_w3JzrzmcpeJJMzZ24HT6Uk
          source_id: s_DDvaoD7JCbooMxb5v2KyVo
          stance: supports
          locator: CBDB:206702
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_DDvaoD7JCbooMxb5v2KyVo
            source_type: api_record
            title: 中国历代人物传记资料库：王顯仁（CBDB 206702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206702&o=json
            external_identifier: CBDB:206702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_MdeesGeP9UsGCiTDaBUqJC
        subject_person_id: p_88N8F7QC67BDANQ41w4EaZ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1547年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1547-01-01
            latest: 1547-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FmUArcCMLtz3JKJnNrfoo6
          claim_id: c_MdeesGeP9UsGCiTDaBUqJC
          source_id: s_DDvaoD7JCbooMxb5v2KyVo
          stance: supports
          locator: CBDB:206702
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1547
          source:
            id: s_DDvaoD7JCbooMxb5v2KyVo
            source_type: api_record
            title: 中国历代人物传记资料库：王顯仁（CBDB 206702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206702&o=json
            external_identifier: CBDB:206702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gXfkZg3eGd1makSM7JyzTT
        subject_person_id: p_88N8F7QC67BDANQ41w4EaZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_xDmUQLHKnYeak8UE5Q9tmp
          claim_id: c_gXfkZg3eGd1makSM7JyzTT
          source_id: s_DDvaoD7JCbooMxb5v2KyVo
          stance: supports
          locator: CBDB:206702
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1547
          source:
            id: s_DDvaoD7JCbooMxb5v2KyVo
            source_type: api_record
            title: 中国历代人物传记资料库：王顯仁（CBDB 206702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206702&o=json
            external_identifier: CBDB:206702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Sxb76yu8h8oW7scHZ_lnie
        subject_person_id: p_yzyPEUAYsfL49q52tBj1kq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_88N8F7QC67BDANQ41w4EaZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZQ5zGod9E3ojBXLlOC954U
          claim_id: c_Sxb76yu8h8oW7scHZ_lnie
          source_id: s_1SGhdNvrpL4cDvNZ7h9REZ
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百一十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1SGhdNvrpL4cDvNZ7h9REZ
            source_type: api_record
            title: 中国历代人物传记资料库：王用中（CBDB 221766）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221766&o=json
            external_identifier: CBDB:221766
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.338Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_yzyPEUAYsfL49q52tBj1kq
        status: active
        display_name: 王用中
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_LCKHU2y1_VaRiSp6C0DMtS
        subject_person_id: p_6WVCyPZFzYK7Wi3KQchdvh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_88N8F7QC67BDANQ41w4EaZ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ykCCs3xV6YGf7KdwNhcdGd
          claim_id: c_LCKHU2y1_VaRiSp6C0DMtS
          source_id: s_AuaQB8dzegeRaxhauXGF4G
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百一十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_AuaQB8dzegeRaxhauXGF4G
            source_type: api_record
            title: 中国历代人物传记资料库：王紳（CBDB 221765）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221765&o=json
            external_identifier: CBDB:221765
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.336Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6WVCyPZFzYK7Wi3KQchdvh
        status: active
        display_name: 王紳
        merged_into_person_id: null
    - claim:
        id: c_KWKuGekZ0aS0eHXXK2f1X6
        subject_person_id: p_se1Gd4Gcj3NrcKJzT2JdPb
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_88N8F7QC67BDANQ41w4EaZ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GbS1nAgLS0u_74zTD653Me
          claim_id: c_KWKuGekZ0aS0eHXXK2f1X6
          source_id: s_4LHAz46ZaVe5fRZQBG8UzR
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百一十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4LHAz46ZaVe5fRZQBG8UzR
            source_type: api_record
            title: 中国历代人物传记资料库：王國寧（CBDB 221764）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221764&o=json
            external_identifier: CBDB:221764
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.335Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_se1Gd4Gcj3NrcKJzT2JdPb
        status: active
        display_name: 王國寧
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王顯仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王顯仁（生于1547年），明人物。中国历代人物传记资料库（CBDB）以人物编号 206702 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| birth.date | 1547年 | accepted |
| name.primary | 王顯仁 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yzyPEUAYsfL49q52tBj1kq | 王用中 | accepted |
| ancestors | p_6WVCyPZFzYK7Wi3KQchdvh | 王紳 | accepted |
| ancestors | p_se1Gd4Gcj3NrcKJzT2JdPb | 王國寧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國寧（CBDB 221764）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221764&o=json)
- [中国历代人物传记资料库：王紳（CBDB 221765）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221765&o=json)
- [中国历代人物传记资料库：王顯仁（CBDB 206702）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206702&o=json)
- [中国历代人物传记资料库：王用中（CBDB 221766）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221766&o=json)
