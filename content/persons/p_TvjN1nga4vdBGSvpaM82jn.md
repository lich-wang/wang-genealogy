---
schema: wang-person/v1
id: p_TvjN1nga4vdBGSvpaM82jn
status: active
merged_into: null
display_name: 王彧
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QGhqg3XzRBaahNKAU8tmsK
        subject_person_id: p_TvjN1nga4vdBGSvpaM82jn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_e8RDyAqmHFq172X5VGRAkJ
          claim_id: c_QGhqg3XzRBaahNKAU8tmsK
          source_id: s_VmDu41qWgU77oUpsEXRCi1
          stance: supports
          locator: CBDB:207878
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207878）
          source: &a1
            id: s_VmDu41qWgU77oUpsEXRCi1
            source_type: api_record
            title: 中国历代人物传记资料库：王彧（CBDB 207878）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207878&o=json
            external_identifier: CBDB:207878
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.935Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_DGm22j4jMMqHCew5Go2V4Z
        subject_person_id: p_TvjN1nga4vdBGSvpaM82jn
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1406年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D4x5H9EuyNy7fQpMxMrbGr
          claim_id: c_DGm22j4jMMqHCew5Go2V4Z
          source_id: s_VmDu41qWgU77oUpsEXRCi1
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TD79uJzuU5nePof5HvsZok
        subject_person_id: p_TvjN1nga4vdBGSvpaM82jn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_stdnDKox2wN5oyyFCDYKh2
          claim_id: c_TD79uJzuU5nePof5HvsZok
          source_id: s_VmDu41qWgU77oUpsEXRCi1
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
        id: c_4MhEusLXJ-34bDNoelPb5F
        subject_person_id: p_mpLV7oJiFdXj4zCSnQaS14
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TvjN1nga4vdBGSvpaM82jn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H_6_XPkzbNiVU-xEL0iheu
          claim_id: c_4MhEusLXJ-34bDNoelPb5F
          source_id: s_zryi2LkK33o2BwF2L2reos
          stance: supports
          locator: 正統四年進士登科錄:一卷，第三甲第四十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zryi2LkK33o2BwF2L2reos
            source_type: api_record
            title: 中国历代人物传记资料库：王勉（CBDB 237318）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237318&o=json
            external_identifier: CBDB:237318
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.833Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mpLV7oJiFdXj4zCSnQaS14
        status: active
        display_name: 王勉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_sUb3NsHCjnGSYlgLihcXeC
        subject_person_id: p_65nM45gMqWi73jRK1ss7X4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TvjN1nga4vdBGSvpaM82jn
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nRictq8JyvNcF13h4gqIxl
          claim_id: c_sUb3NsHCjnGSYlgLihcXeC
          source_id: s_LhsxKP6LAnURtPjbWVR9sq
          stance: supports
          locator: 正統四年進士登科錄:一卷，第三甲第四十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LhsxKP6LAnURtPjbWVR9sq
            source_type: api_record
            title: 中国历代人物传记资料库：王輔（CBDB 237317）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237317&o=json
            external_identifier: CBDB:237317
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.833Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_65nM45gMqWi73jRK1ss7X4
        status: active
        display_name: 王輔
        merged_into_person_id: null
    - claim:
        id: c_1SaEvpgHEqn02z2AgqkP2U
        subject_person_id: p_eJBZ6JRWQGmDTsfFDkLqhK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TvjN1nga4vdBGSvpaM82jn
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KA3TG5_lBKLqfte5pqvLER
          claim_id: c_1SaEvpgHEqn02z2AgqkP2U
          source_id: s_pwUwuF2wVip24djTXdkFrg
          stance: supports
          locator: 正統四年進士登科錄:一卷，第三甲第四十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pwUwuF2wVip24djTXdkFrg
            source_type: api_record
            title: 中国历代人物传记资料库：王元善（CBDB 237316）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237316&o=json
            external_identifier: CBDB:237316
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.832Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_eJBZ6JRWQGmDTsfFDkLqhK
        status: active
        display_name: 王元善
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王彧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彧 | accepted |
| birth.date | 1406年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mpLV7oJiFdXj4zCSnQaS14 | 王勉 | accepted |
| ancestors | p_65nM45gMqWi73jRK1ss7X4 | 王輔 | accepted |
| ancestors | p_eJBZ6JRWQGmDTsfFDkLqhK | 王元善 | accepted |

## 外部来源

- [中国历代人物传记资料库：王輔（CBDB 237317）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237317&o=json)
- [中国历代人物传记资料库：王勉（CBDB 237318）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237318&o=json)
- [中国历代人物传记资料库：王彧（CBDB 207878）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207878&o=json)
- [中国历代人物传记资料库：王元善（CBDB 237316）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237316&o=json)
