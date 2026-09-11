---
schema: wang-person/v1
id: p_n6FB4ucTa6BP7qn8DgCqxS
status: active
merged_into: null
display_name: 王麒
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ixwcKnmC8Ds87aUa1AKs6m
        subject_person_id: p_n6FB4ucTa6BP7qn8DgCqxS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RERGtWbyDH4cnNoY7iP1ih
          claim_id: c_ixwcKnmC8Ds87aUa1AKs6m
          source_id: s_SJgFTzeEo9fpTqD1wT2CN6
          stance: supports
          locator: CBDB:257861
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（257861）
          source: &a1
            id: s_SJgFTzeEo9fpTqD1wT2CN6
            source_type: api_record
            title: 中国历代人物传记资料库：王麒（CBDB 257861）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257861&o=json
            external_identifier: CBDB:257861
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.433Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VT2KBf7bGat9zz3oopWfcr
        subject_person_id: p_n6FB4ucTa6BP7qn8DgCqxS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麒，明人物。成化二十三年進士，籍贯海州，曾任知縣。（中国历代人物传记资料库 CBDB 257861）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NYVMoNUHgzaHaG3G1hnOTc
          claim_id: c_VT2KBf7bGat9zz3oopWfcr
          source_id: s_SJgFTzeEo9fpTqD1wT2CN6
          stance: supports
          locator: CBDB:257861
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_wJI_xVl-gcRv6vw8OOKiHW
        subject_person_id: p_n6FB4ucTa6BP7qn8DgCqxS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6zgueKBTLH65ghccEBpJUs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a9AU-CFGN6lle5lsoPVQjp
          claim_id: c_wJI_xVl-gcRv6vw8OOKiHW
          source_id: s_4uC29d4Vjc4o2MpghhPq5U
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第二甲第四十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4uC29d4Vjc4o2MpghhPq5U
            source_type: api_record
            title: 中国历代人物传记资料库：王軒（CBDB 200441）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200441&o=json
            external_identifier: CBDB:200441
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.613Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6zgueKBTLH65ghccEBpJUs
        status: active
        display_name: 王軒
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王麒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王麒 | accepted |
| bio.summary | 王麒，明人物。成化二十三年進士，籍贯海州，曾任知縣。（中国历代人物传记资料库 CBDB 257861） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_6zgueKBTLH65ghccEBpJUs | 王軒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王麒（CBDB 257861）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257861&o=json)
- [中国历代人物传记资料库：王軒（CBDB 200441）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200441&o=json)
