---
schema: wang-person/v1
id: p_EFHu2f75P5hv7hu9BKehC4
status: active
merged_into: null
display_name: 王唐臣
cbdb_id: 22174
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jT1ZYMHzcEWHe7kiPERDLb
        subject_person_id: p_EFHu2f75P5hv7hu9BKehC4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王唐臣，宋人物。籍贯西河。（中国历代人物传记资料库 CBDB 22174）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_WPTz0QiAOgoU3sc5lRaaZb
          claim_id: c_jT1ZYMHzcEWHe7kiPERDLb
          source_id: s_ybwrd3S7qCGk9NcuHtp6FC
          stance: supports
          locator: CBDB:22174
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ybwrd3S7qCGk9NcuHtp6FC
            source_type: api_record
            title: 中国历代人物传记资料库：王唐臣（CBDB 22174）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22174&o=json
            external_identifier: CBDB:22174
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_sFMWbfbnEu3uNnCYKru1uw
        subject_person_id: p_EFHu2f75P5hv7hu9BKehC4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王唐臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_kuRh6HYCeQHKC6GowmVXhf
          claim_id: c_sFMWbfbnEu3uNnCYKru1uw
          source_id: s_ybwrd3S7qCGk9NcuHtp6FC
          stance: supports
          locator: CBDB:22174
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_cF655qqmGnI-h3Ql1R0Dag
        subject_person_id: p_DFWuMPWUstBm3Tr8KacmZf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EFHu2f75P5hv7hu9BKehC4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ucFCVBQqloQ2v_10QIUgRj
          claim_id: c_cF655qqmGnI-h3Ql1R0Dag
          source_id: s_42M1RyqHPGFYMpZ9FeVqji
          stance: supports
          locator: CBDB 双向互证（子 王唐臣 ⇄ 父 王嗣宗）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_42M1RyqHPGFYMpZ9FeVqji
            source_type: api_record
            title: 中国历代人物传记资料库：王嗣宗（CBDB 1880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1880&o=json
            external_identifier: CBDB:1880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.370Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DFWuMPWUstBm3Tr8KacmZf
        status: active
        display_name: 王嗣宗
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王唐臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王唐臣，宋人物。籍贯西河。（中国历代人物传记资料库 CBDB 22174） | accepted |
| name.primary | 王唐臣 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DFWuMPWUstBm3Tr8KacmZf | 王嗣宗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嗣宗（CBDB 1880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1880&o=json)
- [中国历代人物传记资料库：王唐臣（CBDB 22174）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22174&o=json)
