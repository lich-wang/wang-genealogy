---
schema: wang-person/v1
id: p_P21qG4P18w37fmpCkF8Ndm
status: active
merged_into: null
display_name: 王靜儀
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LNgNxL9UAFMR7KjGUMA3ro
        subject_person_id: p_P21qG4P18w37fmpCkF8Ndm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王靜儀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cwvPLS3AWo2A2nGMXTtDLq
          claim_id: c_LNgNxL9UAFMR7KjGUMA3ro
          source_id: s_GvNYKcSXv4KQHQCHeVBD5x
          stance: supports
          locator: CBDB:70285
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（70285）
          source: &a1
            id: s_GvNYKcSXv4KQHQCHeVBD5x
            source_type: api_record
            title: 中国历代人物传记资料库：王靜儀（CBDB 70285）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=70285&o=json
            external_identifier: CBDB:70285
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.306Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BTMHYptd4XZrfhGQKhjvuR
        subject_person_id: p_P21qG4P18w37fmpCkF8Ndm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GWwS6wGEFPc7xRd3UDsz9F
          claim_id: c_BTMHYptd4XZrfhGQKhjvuR
          source_id: s_GvNYKcSXv4KQHQCHeVBD5x
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
        id: c_KpuecLSIl4oQ_BlWaQ-x_2
        subject_person_id: p_M1NTzKi7fRKXM9yAaJxtA2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_P21qG4P18w37fmpCkF8Ndm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C_hqLd81JdJwYvyJfmWoUK
          claim_id: c_KpuecLSIl4oQ_BlWaQ-x_2
          source_id: s_GvNYKcSXv4KQHQCHeVBD5x
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1408, HuWenKai #255：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_M1NTzKi7fRKXM9yAaJxtA2
        status: active
        display_name: 王輅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_pBMxLbY__i3nJs_uyWMBFO
        subject_person_id: p_P21qG4P18w37fmpCkF8Ndm
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_A28Jet2yyVtGoPFQCTLcGA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PSfFRqoqPeEc8cjei31W49
          claim_id: c_pBMxLbY__i3nJs_uyWMBFO
          source_id: s_0UMQ7Q6DSzOGnDxwSiuXeI
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1408, HuWenKai #255：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_0UMQ7Q6DSzOGnDxwSiuXeI
            source_type: api_record
            title: 中国历代人物传记资料库：吳毓華（CBDB 70287）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=70287&o=json
            external_identifier: CBDB:70287
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_A28Jet2yyVtGoPFQCTLcGA
        status: active
        display_name: 吳毓華
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王靜儀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王靜儀 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_M1NTzKi7fRKXM9yAaJxtA2 | 王輅 | accepted |
| spouses | p_A28Jet2yyVtGoPFQCTLcGA | 吳毓華 | accepted |

## 外部来源

- [中国历代人物传记资料库：王靜儀（CBDB 70285）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=70285&o=json)
- [中国历代人物传记资料库：吳毓華（CBDB 70287）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=70287&o=json)
