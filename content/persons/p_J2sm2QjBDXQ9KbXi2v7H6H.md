---
schema: wang-person/v1
id: p_J2sm2QjBDXQ9KbXi2v7H6H
status: active
merged_into: null
display_name: 王鶚舉
cbdb_id: 27286
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fBJbX1vgHbChNx81fARb4o
        subject_person_id: p_J2sm2QjBDXQ9KbXi2v7H6H
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鶚舉，宋人物。籍贯吉水，入仕進士。（中国历代人物传记资料库 CBDB 27286）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_-QaaKBBOX-d3C2hkNzBdvQ
          claim_id: c_fBJbX1vgHbChNx81fARb4o
          source_id: s_BYQ23wCKNMuK3tkW16x4gc
          stance: supports
          locator: CBDB:27286
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_BYQ23wCKNMuK3tkW16x4gc
            source_type: api_record
            title: 中国历代人物传记资料库：王鶚舉（CBDB 27286）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27286&o=json
            external_identifier: CBDB:27286
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gCXv7P3BPVt8QuVWtKhbi5
        subject_person_id: p_J2sm2QjBDXQ9KbXi2v7H6H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鶚舉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_xaShMFAcAXu5w7F8L3Tx7P
          claim_id: c_gCXv7P3BPVt8QuVWtKhbi5
          source_id: s_BYQ23wCKNMuK3tkW16x4gc
          stance: supports
          locator: CBDB:27286
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_GTwWojLVq7QLAKFls-gdW2
        subject_person_id: p_sAHyfWv3qVkLkhw3tCMiF7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_J2sm2QjBDXQ9KbXi2v7H6H
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ho0aiUt4csqBVzhyvWuIUw
          claim_id: c_GTwWojLVq7QLAKFls-gdW2
          source_id: s_BYQ23wCKNMuK3tkW16x4gc
          stance: supports
          locator: CBDB 双向互证（父 王端禮 ⇄ 子 王鶚舉）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_BYQ23wCKNMuK3tkW16x4gc
            source_type: api_record
            title: 中国历代人物传记资料库：王鶚舉（CBDB 27286）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27286&o=json
            external_identifier: CBDB:27286
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_sAHyfWv3qVkLkhw3tCMiF7
        status: active
        display_name: 王端禮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鶚舉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鶚舉，宋人物。籍贯吉水，入仕進士。（中国历代人物传记资料库 CBDB 27286） | accepted |
| name.primary | 王鶚舉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_sAHyfWv3qVkLkhw3tCMiF7 | 王端禮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鶚舉（CBDB 27286）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27286&o=json)
