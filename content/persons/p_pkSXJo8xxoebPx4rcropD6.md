---
schema: wang-person/v1
id: p_pkSXJo8xxoebPx4rcropD6
status: active
merged_into: null
display_name: 王瀹
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_m8CCsL95PFsB3mfoxpJzUC
        subject_person_id: p_pkSXJo8xxoebPx4rcropD6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瀹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8bMFVqpDqJib4zqkj6MuoY
          claim_id: c_m8CCsL95PFsB3mfoxpJzUC
          source_id: s_KkVkFqVNXkkUm7E6DexKdE
          stance: supports
          locator: CBDB:1936
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1936）
          source: &a1
            id: s_KkVkFqVNXkkUm7E6DexKdE
            source_type: api_record
            title: 中国历代人物传记资料库：王瀹（CBDB 1936）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1936&o=json
            external_identifier: CBDB:1936
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.412Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ioryqdpY43rgN8R8oAE6Af
        subject_person_id: p_pkSXJo8xxoebPx4rcropD6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2B4ZygHuVEL66kMezpXDGe
          claim_id: c_ioryqdpY43rgN8R8oAE6Af
          source_id: s_KkVkFqVNXkkUm7E6DexKdE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
        id: c_jtRw0Gv3-Co6Kief3Zc5Ja
        subject_person_id: p_W8gB3V15xCSBne67itBg5g
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_pkSXJo8xxoebPx4rcropD6
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HVd6IUNHUAHY-k09jazO7E
          claim_id: c_jtRw0Gv3-Co6Kief3Zc5Ja
          source_id: s_KkVkFqVNXkkUm7E6DexKdE
          stance: supports
          locator: CBDB 双向互证（祖父 王夬 ⇄ 孫 王瀹）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_W8gB3V15xCSBne67itBg5g
        status: active
        display_name: 王夬
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王瀹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瀹 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_W8gB3V15xCSBne67itBg5g | 王夬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瀹（CBDB 1936）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1936&o=json)
