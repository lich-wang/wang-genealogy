---
schema: wang-person/v1
id: p_Z6SSx6JCsA5rPQ9sKcT6Nz
status: active
merged_into: null
display_name: 王珪
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9Qv2ogSyDFmQ4c2ELzk7oo
        subject_person_id: p_Z6SSx6JCsA5rPQ9sKcT6Nz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GmSXFwRDEjNQCbSCLD799C
          claim_id: c_9Qv2ogSyDFmQ4c2ELzk7oo
          source_id: s_BXuvhETUeu7HtmhUUopQ8x
          stance: supports
          locator: CBDB:262092
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（262092）
          source: &a1
            id: s_BXuvhETUeu7HtmhUUopQ8x
            source_type: api_record
            title: 中国历代人物传记资料库：王珪（CBDB 262092）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262092&o=json
            external_identifier: CBDB:262092
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.577Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oaSGq6aKT4D3DoBhik47Pd
        subject_person_id: p_Z6SSx6JCsA5rPQ9sKcT6Nz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珪，明人物。景泰五年進士，籍贯長安。（中国历代人物传记资料库 CBDB 262092）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6GMphQ-ZV7ulAh3VuTneuB
          claim_id: c_oaSGq6aKT4D3DoBhik47Pd
          source_id: s_BXuvhETUeu7HtmhUUopQ8x
          stance: supports
          locator: CBDB:262092
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_SOvspP3FAvC0EpG_0Zr11B
        subject_person_id: p_Z6SSx6JCsA5rPQ9sKcT6Nz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vfLJWcSYWHpLtF3oqEp42D
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_waSnXVmJSVJAwZ4KjZEL8u
          claim_id: c_SOvspP3FAvC0EpG_0Zr11B
          source_id: s_BXuvhETUeu7HtmhUUopQ8x
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vfLJWcSYWHpLtF3oqEp42D
        status: active
        display_name: 王臣
        merged_into_person_id: null
    - claim:
        id: c_ZsmpCqBXEASNqQ2TAjqyiD
        subject_person_id: p_Z6SSx6JCsA5rPQ9sKcT6Nz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HE6TVhtyyADTmF4djSgNSa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_45f61TwLpaUcyli4QDvY_i
          claim_id: c_ZsmpCqBXEASNqQ2TAjqyiD
          source_id: s_qnl2qy7klXEJWEvqg_QA2j
          stance: supports
          locator: CBDB：兄弟 王臣（198359）之父／母 王珪
          quotation: null
          interpretation_note: 由兄弟关系推断：王隆 与 王臣 为同胞（CBDB 记「弟」），王臣 之父／母即 王隆 之父／母。
          source:
            id: s_qnl2qy7klXEJWEvqg_QA2j
            source_type: api_record
            title: 中国历代人物传记资料库：王隆（CBDB 262125）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262125&o=json
            external_identifier: CBDB:262125
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HE6TVhtyyADTmF4djSgNSa
        status: active
        display_name: 王隆
        merged_into_person_id: null
    - claim:
        id: c_eLw7RzaQcma4tPabeVAerd
        subject_person_id: p_Z6SSx6JCsA5rPQ9sKcT6Nz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fRG7snKxuVbLXgqtEYBTxF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xEEmOmRBgqrKb0GsXYI7O7
          claim_id: c_eLw7RzaQcma4tPabeVAerd
          source_id: s_8IFn1kvSJcbuti4qw4CBmI
          stance: supports
          locator: CBDB：兄弟 王臣（198359）之父／母 王珪
          quotation: null
          interpretation_note: 由兄弟关系推断：王威 与 王臣 为同胞（CBDB 记「弟」），王臣 之父／母即 王威 之父／母。
          source:
            id: s_8IFn1kvSJcbuti4qw4CBmI
            source_type: api_record
            title: 中国历代人物传记资料库：王威（CBDB 262136）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262136&o=json
            external_identifier: CBDB:262136
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fRG7snKxuVbLXgqtEYBTxF
        status: active
        display_name: 王威
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王珪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珪 | accepted |
| bio.summary | 王珪，明人物。景泰五年進士，籍贯長安。（中国历代人物传记资料库 CBDB 262092） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_vfLJWcSYWHpLtF3oqEp42D | 王臣 | accepted |
| children | p_HE6TVhtyyADTmF4djSgNSa | 王隆 | accepted |
| children | p_fRG7snKxuVbLXgqtEYBTxF | 王威 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珪（CBDB 262092）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262092&o=json)
- [中国历代人物传记资料库：王隆（CBDB 262125）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262125&o=json)
- [中国历代人物传记资料库：王威（CBDB 262136）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262136&o=json)
