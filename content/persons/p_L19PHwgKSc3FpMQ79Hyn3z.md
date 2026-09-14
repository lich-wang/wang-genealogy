---
schema: wang-person/v1
id: p_L19PHwgKSc3FpMQ79Hyn3z
status: active
merged_into: null
display_name: 王克明
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4KdXoTiUEMem41qveAPUYq
        subject_person_id: p_L19PHwgKSc3FpMQ79Hyn3z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EdDyVhmEAk3oxYfP8bJNfN
          claim_id: c_4KdXoTiUEMem41qveAPUYq
          source_id: s_sFUBfNL3VboHruuAUoPsqc
          stance: supports
          locator: CBDB:17762
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（17762）
          source: &a1
            id: s_sFUBfNL3VboHruuAUoPsqc
            source_type: api_record
            title: 中国历代人物传记资料库：王克明（CBDB 17762）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17762&o=json
            external_identifier: CBDB:17762
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.676Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eRSB2U4bxouPLiE91uMepG
        subject_person_id: p_L19PHwgKSc3FpMQ79Hyn3z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克明，宋人物。籍贯洛陽，曾任刺史、東上閤門使、四方館使。（中国历代人物传记资料库 CBDB 17762）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zXzrV4Lv2r0Obxif6mn9aB
          claim_id: c_eRSB2U4bxouPLiE91uMepG
          source_id: s_sFUBfNL3VboHruuAUoPsqc
          stance: supports
          locator: CBDB:17762
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_UJ3NkRWDx4TPPtv9KlIF8O
        subject_person_id: p_L19PHwgKSc3FpMQ79Hyn3z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TL3Nge7SqxMdrkzNfvdNcJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KWTYI8cH8TWl3GYtjBwjKQ
          claim_id: c_UJ3NkRWDx4TPPtv9KlIF8O
          source_id: s_sFUBfNL3VboHruuAUoPsqc
          stance: supports
          locator: CBDB 双向互证（子 王誨 ⇄ 父 王克明）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_TL3Nge7SqxMdrkzNfvdNcJ
        status: active
        display_name: 王誨
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_UrDdycJNj2tJebDjGmSzWH
        subject_person_id: p_L19PHwgKSc3FpMQ79Hyn3z
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xYin523MUijjPHQi64Mp4N
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Mf5hxl-CE36m1b6hfA1nCp
          claim_id: c_UrDdycJNj2tJebDjGmSzWH
          source_id: s_BeLePDwb6JfXjxxgyhjGOo
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 17762 王克明）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_BeLePDwb6JfXjxxgyhjGOo
            source_type: api_record
            title: 中国历代人物传记资料库：王克緒（CBDB 17760）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17760&o=json
            external_identifier: CBDB:17760
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xYin523MUijjPHQi64Mp4N
        status: active
        display_name: 王克緒
        merged_into_person_id: null
---

# 王克明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克明 | accepted |
| bio.summary | 王克明，宋人物。籍贯洛陽，曾任刺史、東上閤門使、四方館使。（中国历代人物传记资料库 CBDB 17762） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_TL3Nge7SqxMdrkzNfvdNcJ | 王誨 | accepted |
| other | p_xYin523MUijjPHQi64Mp4N | 王克緒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王克明（CBDB 17762）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17762&o=json)
- [中国历代人物传记资料库：王克緒（CBDB 17760）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17760&o=json)
