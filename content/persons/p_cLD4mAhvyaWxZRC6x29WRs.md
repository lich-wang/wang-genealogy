---
schema: wang-person/v1
id: p_cLD4mAhvyaWxZRC6x29WRs
status: active
merged_into: null
display_name: 王繹宗
cbdb_id: 292172
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_J4Sgghe6F2wjmkiFRTYaKV
        subject_person_id: p_cLD4mAhvyaWxZRC6x29WRs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繹宗，明人物。嘉靖十一年進士，籍贯南充。（中国历代人物传记资料库 CBDB 292172）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Mmn-cXeKqEHTc80zpNiQmI
          claim_id: c_J4Sgghe6F2wjmkiFRTYaKV
          source_id: s_j2KDdGCVfNx6fNtZ7NwRJr
          stance: supports
          locator: CBDB:292172
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_j2KDdGCVfNx6fNtZ7NwRJr
            source_type: api_record
            title: 中国历代人物传记资料库：王繹宗（CBDB 292172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292172&o=json
            external_identifier: CBDB:292172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LH3SwajrEV2AQdMgN7nPRH
        subject_person_id: p_cLD4mAhvyaWxZRC6x29WRs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繹宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_gdoPSCFjQ6ndafLCJwZ9Be
          claim_id: c_LH3SwajrEV2AQdMgN7nPRH
          source_id: s_j2KDdGCVfNx6fNtZ7NwRJr
          stance: supports
          locator: CBDB:292172
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_azPUQ2J-uq9P_goNS-uwLu
        subject_person_id: p_AjJ9D9hYYBcRjzGCjrMcoe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cLD4mAhvyaWxZRC6x29WRs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wXFWJDIERPMH_uQqP9o-0q
          claim_id: c_azPUQ2J-uq9P_goNS-uwLu
          source_id: s_8nolP_bh_aMVi-HM3XyPYL
          stance: supports
          locator: CBDB：兄弟 王繼宗（126879）之父／母 王汾
          quotation: null
          interpretation_note: 由兄弟关系推断：王繹宗 与 王繼宗 为同胞（CBDB 记「兄」），王繼宗 之父／母即 王繹宗 之父／母。
          source:
            id: s_8nolP_bh_aMVi-HM3XyPYL
            source_type: api_record
            title: 中国历代人物传记资料库：王繹宗（CBDB 292172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292172&o=json
            external_identifier: CBDB:292172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AjJ9D9hYYBcRjzGCjrMcoe
        status: active
        display_name: 王汾
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_8fEw6PTNe8RD9CvdA7NeHN
        subject_person_id: p_cLD4mAhvyaWxZRC6x29WRs
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tJDfPMXaXoCJ7dnxXR4ZsL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MLI6CfIzIjy_YhJCVymN80
          claim_id: c_8fEw6PTNe8RD9CvdA7NeHN
          source_id: s_8nolP_bh_aMVi-HM3XyPYL
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126879 王繼宗）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8nolP_bh_aMVi-HM3XyPYL
            source_type: api_record
            title: 中国历代人物传记资料库：王繹宗（CBDB 292172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292172&o=json
            external_identifier: CBDB:292172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tJDfPMXaXoCJ7dnxXR4ZsL
        status: active
        display_name: 王繼宗
        merged_into_person_id: null
---

# 王繹宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王繹宗，明人物。嘉靖十一年進士，籍贯南充。（中国历代人物传记资料库 CBDB 292172） | accepted |
| name.primary | 王繹宗 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AjJ9D9hYYBcRjzGCjrMcoe | 王汾 | accepted |
| other | p_tJDfPMXaXoCJ7dnxXR4ZsL | 王繼宗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王繹宗（CBDB 292172）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292172&o=json)
