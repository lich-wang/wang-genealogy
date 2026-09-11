---
schema: wang-person/v1
id: p_NJ2zwbpSpJ9kxApdwQjUpg
status: active
merged_into: null
display_name: 王尚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Kg9BVik5deBG2P43Ds3NEA
        subject_person_id: p_NJ2zwbpSpJ9kxApdwQjUpg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sSfsSwB1DvpycJA56fhobV
          claim_id: c_Kg9BVik5deBG2P43Ds3NEA
          source_id: s_K3FibKtBogDuQNzbKrqmhT
          stance: supports
          locator: CBDB:39437
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39437）
          source: &a1
            id: s_K3FibKtBogDuQNzbKrqmhT
            source_type: api_record
            title: 中国历代人物传记资料库：王尚（CBDB 39437）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39437&o=json
            external_identifier: CBDB:39437
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.615Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_WwvWAJswnQVJXPFYNKWoMq
        subject_person_id: p_NJ2zwbpSpJ9kxApdwQjUpg
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1129年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4WUNL2jnufWKHrkjXEcEco
          claim_id: c_WwvWAJswnQVJXPFYNKWoMq
          source_id: s_K3FibKtBogDuQNzbKrqmhT
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
        id: c_B9zXhJdB51ccc5XNQJQFHv
        subject_person_id: p_NJ2zwbpSpJ9kxApdwQjUpg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚（卒于1129年），宋人物。身份为死國難，曾任經略安撫使司管勾（主管）機宜文字。（中国历代人物传记资料库 CBDB 39437）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Z7N-MFWwo1OsZeF7VLIikJ
          claim_id: c_B9zXhJdB51ccc5XNQJQFHv
          source_id: s_K3FibKtBogDuQNzbKrqmhT
          stance: supports
          locator: CBDB:39437
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王尚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王尚 | accepted |
| death.date | 1129年 | accepted |
| bio.summary | 王尚（卒于1129年），宋人物。身份为死國難，曾任經略安撫使司管勾（主管）機宜文字。（中国历代人物传记资料库 CBDB 39437） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王尚（CBDB 39437）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39437&o=json)
