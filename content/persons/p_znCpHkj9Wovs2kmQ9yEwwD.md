---
schema: wang-person/v1
id: p_znCpHkj9Wovs2kmQ9yEwwD
status: active
merged_into: null
display_name: 王煥之
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8Cp4HxPB5D7pKM8GEi7AFb
        subject_person_id: p_znCpHkj9Wovs2kmQ9yEwwD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煥之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_t1MDRCDy92RwrNKb5Ls2Ru
          claim_id: c_8Cp4HxPB5D7pKM8GEi7AFb
          source_id: s_NBNWKy2BsD6nuQ5ACQcax8
          stance: supports
          locator: CBDB:22242
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22242）
          source: &a1
            id: s_NBNWKy2BsD6nuQ5ACQcax8
            source_type: api_record
            title: 中国历代人物传记资料库：王煥之（CBDB 22242）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22242&o=json
            external_identifier: CBDB:22242
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.861Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pjdUoEvdczK3VctvPTLFnr
        subject_person_id: p_znCpHkj9Wovs2kmQ9yEwwD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煥之，宋人物。籍贯江寧，曾任右宣教郎、幹辦行在諸司糧料院。（中国历代人物传记资料库 CBDB 22242）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ln0Tf-NF0GWTJfuraXyXGw
          claim_id: c_pjdUoEvdczK3VctvPTLFnr
          source_id: s_NBNWKy2BsD6nuQ5ACQcax8
          stance: supports
          locator: CBDB:22242
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_RDPKz38AWt8t2_0TOuBdXY
        subject_person_id: p_znCpHkj9Wovs2kmQ9yEwwD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6SPn6thp9AmqGVJ3dXMfwA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1gG04A-pW8Q34yXJ_ZFTSm
          claim_id: c_RDPKz38AWt8t2_0TOuBdXY
          source_id: s_NBNWKy2BsD6nuQ5ACQcax8
          stance: supports
          locator: CBDB 双向互证（子 王雋卿 ⇄ 父 王煥之）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_6SPn6thp9AmqGVJ3dXMfwA
        status: active
        display_name: 王雋卿
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_9VKj8jsm4J3iuw1Eh_JpJZ
        subject_person_id: p_znCpHkj9Wovs2kmQ9yEwwD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PhM2oQZ4qEKafFNZXsrBFR
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3D05i9thpWQ4rd-q5LyfpU
          claim_id: c_9VKj8jsm4J3iuw1Eh_JpJZ
          source_id: s_eQohZGfBJ8LJ4Gn22zb7Y9
          stance: supports
          locator: 宋人傳記資料索引(電子版)：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eQohZGfBJ8LJ4Gn22zb7Y9
            source_type: api_record
            title: 中国历代人物传记资料库：王泰來（CBDB 37966）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37966&o=json
            external_identifier: CBDB:37966
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.304Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PhM2oQZ4qEKafFNZXsrBFR
        status: active
        display_name: 王泰來
        merged_into_person_id: null
  other: []
---

# 王煥之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王煥之 | accepted |
| bio.summary | 王煥之，宋人物。籍贯江寧，曾任右宣教郎、幹辦行在諸司糧料院。（中国历代人物传记资料库 CBDB 22242） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_6SPn6thp9AmqGVJ3dXMfwA | 王雋卿 | accepted |
| descendants | p_PhM2oQZ4qEKafFNZXsrBFR | 王泰來 | accepted |

## 外部来源

- [中国历代人物传记资料库：王煥之（CBDB 22242）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22242&o=json)
- [中国历代人物传记资料库：王泰來（CBDB 37966）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37966&o=json)
