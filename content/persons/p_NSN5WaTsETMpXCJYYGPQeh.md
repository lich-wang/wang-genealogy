---
schema: wang-person/v1
id: p_NSN5WaTsETMpXCJYYGPQeh
status: active
merged_into: null
display_name: 王永年
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G1XPiGjZDzFTLssGUEqs1B
        subject_person_id: p_NSN5WaTsETMpXCJYYGPQeh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永年
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BWQug9deCd6dRgGMm1wZY1
          claim_id: c_G1XPiGjZDzFTLssGUEqs1B
          source_id: s_Kv6VFUKNC7nCej3vKg3oJh
          stance: supports
          locator: CBDB:227302
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（227302）
          source: &a1
            id: s_Kv6VFUKNC7nCej3vKg3oJh
            source_type: api_record
            title: 中国历代人物传记资料库：王永年（CBDB 227302）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227302&o=json
            external_identifier: CBDB:227302
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.498Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CSreX2GXUvHhCCTDLiNckH
        subject_person_id: p_NSN5WaTsETMpXCJYYGPQeh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永年，明人物。萬曆丙戌科進士進士，籍贯臨清。（中国历代人物传记资料库 CBDB 227302）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_521qOjqKMV8EoH_T05lSyn
          claim_id: c_CSreX2GXUvHhCCTDLiNckH
          source_id: s_Kv6VFUKNC7nCej3vKg3oJh
          stance: supports
          locator: CBDB:227302
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_GuCDYWmVPqtX2e3lCOMn75
        subject_person_id: p_FygGhfrnq3smeMksbXnbJf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NSN5WaTsETMpXCJYYGPQeh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_akRKPkDoodMeox82d9EIjt
          claim_id: c_GuCDYWmVPqtX2e3lCOMn75
          source_id: s_Ih07qhNU_a2Jtpi_JmifZD
          stance: supports
          locator: CBDB：兄弟 王都（207078）之父／母 王雍熙
          quotation: null
          interpretation_note: 由兄弟关系推断：王永年 与 王都 为同胞（CBDB 记「兄」），王都 之父／母即 王永年 之父／母。
          source:
            id: s_Ih07qhNU_a2Jtpi_JmifZD
            source_type: api_record
            title: 中国历代人物传记资料库：王永年（CBDB 227302）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227302&o=json
            external_identifier: CBDB:227302
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FygGhfrnq3smeMksbXnbJf
        status: active
        display_name: 王雍熙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Aks8IFEH0oumb9ebgQfq-L
        subject_person_id: p_4UbRK7w6DiK7iFYWsav6v1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_NSN5WaTsETMpXCJYYGPQeh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5fJ1JQ9dC8Jr27BZLuin53
          claim_id: c_Aks8IFEH0oumb9ebgQfq-L
          source_id: s_Ih07qhNU_a2Jtpi_JmifZD
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207078 王都）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Ih07qhNU_a2Jtpi_JmifZD
            source_type: api_record
            title: 中国历代人物传记资料库：王永年（CBDB 227302）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227302&o=json
            external_identifier: CBDB:227302
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4UbRK7w6DiK7iFYWsav6v1
        status: active
        display_name: 王都
        merged_into_person_id: null
---

# 王永年

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永年 | accepted |
| bio.summary | 王永年，明人物。萬曆丙戌科進士進士，籍贯臨清。（中国历代人物传记资料库 CBDB 227302） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FygGhfrnq3smeMksbXnbJf | 王雍熙 | accepted |
| other | p_4UbRK7w6DiK7iFYWsav6v1 | 王都 | accepted |

## 外部来源

- [中国历代人物传记资料库：王永年（CBDB 227302）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227302&o=json)
