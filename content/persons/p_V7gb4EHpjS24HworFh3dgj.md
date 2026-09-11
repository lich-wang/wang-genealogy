---
schema: wang-person/v1
id: p_V7gb4EHpjS24HworFh3dgj
status: active
merged_into: null
display_name: 吳茝春
revision: 1
cbdb_id: 56780
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z9iQ4AbNtmQXH77lObcic7
        subject_person_id: p_V7gb4EHpjS24HworFh3dgj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 吳茝春
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U9QwDqc8_qsc7goZ10D_02
          claim_id: c_z9iQ4AbNtmQXH77lObcic7
          source_id: s_6iYlQlPw1U1q3FQg0x5Ofj
          stance: supports
          locator: CBDB:56780
          quotation: null
          interpretation_note: CBDB 明确记录的王祖慶配偶
          source: &a1
            id: s_6iYlQlPw1U1q3FQg0x5Ofj
            source_type: api_record
            title: 中国历代人物传记资料库：吳茝春（CBDB 56780）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56780&o=json
            external_identifier: CBDB:56780
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_9_DyxOnQcEBpcRDuLXX6kM
        subject_person_id: p_sJV3o1g9cdPaCH2Ho9mKA7
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_V7gb4EHpjS24HworFh3dgj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ksVIbavHEeGHyK84JxcgbY
          claim_id: c_9_DyxOnQcEBpcRDuLXX6kM
          source_id: s_6iYlQlPw1U1q3FQg0x5Ofj
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #669, HuWenKai #312：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sJV3o1g9cdPaCH2Ho9mKA7
        status: active
        display_name: 王祖慶
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 吳茝春

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 吳茝春 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_sJV3o1g9cdPaCH2Ho9mKA7 | 王祖慶 | accepted |

## 外部来源

- [中国历代人物传记资料库：吳茝春（CBDB 56780）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56780&o=json)
