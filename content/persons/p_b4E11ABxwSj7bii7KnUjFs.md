---
schema: wang-person/v1
id: p_b4E11ABxwSj7bii7KnUjFs
status: active
merged_into: null
display_name: 王晟
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G4FxN1T9CsBXF38CBqEiRP
        subject_person_id: p_b4E11ABxwSj7bii7KnUjFs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9tb5Ju1Lk8NFpML1gZFpGn
          claim_id: c_G4FxN1T9CsBXF38CBqEiRP
          source_id: s_1r7K3EJ69DfcMV5VAcZMjT
          stance: supports
          locator: CBDB:1869
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1869）
          source: &a1
            id: s_1r7K3EJ69DfcMV5VAcZMjT
            source_type: api_record
            title: 中国历代人物传记资料库：王晟（CBDB 1869）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1869&o=json
            external_identifier: CBDB:1869
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.364Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_K9A9XFjNgGTbdFnuk751mp
        subject_person_id: p_b4E11ABxwSj7bii7KnUjFs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晟，宋人物。籍贯東明，曾任轉運司判官。（中国历代人物传记资料库 CBDB 1869）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qoNSSgjnLQm4rALe5rriuF
          claim_id: c_K9A9XFjNgGTbdFnuk751mp
          source_id: s_1r7K3EJ69DfcMV5VAcZMjT
          stance: supports
          locator: CBDB:1869
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
  ancestors:
    - claim:
        id: c_4JJ23hk-tr9_zbneDVdAFD
        subject_person_id: p_KzB2C1aLBuDGmUVnrc9So3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_b4E11ABxwSj7bii7KnUjFs
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2GMSYRYuyaPw150_MogdtN
          claim_id: c_4JJ23hk-tr9_zbneDVdAFD
          source_id: s_1r7K3EJ69DfcMV5VAcZMjT
          stance: supports
          locator: CBDB 双向互证（祖父 王珪 ⇄ 孫 王晟）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_KzB2C1aLBuDGmUVnrc9So3
        status: active
        display_name: 王珪
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王晟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晟 | accepted |
| bio.summary | 王晟，宋人物。籍贯東明，曾任轉運司判官。（中国历代人物传记资料库 CBDB 1869） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_KzB2C1aLBuDGmUVnrc9So3 | 王珪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王晟（CBDB 1869）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1869&o=json)
