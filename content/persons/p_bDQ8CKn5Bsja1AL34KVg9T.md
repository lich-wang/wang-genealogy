---
schema: wang-person/v1
id: p_bDQ8CKn5Bsja1AL34KVg9T
status: active
merged_into: null
display_name: 王宗道
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uZ6wGkNBhBKS3hFY5r1SGc
        subject_person_id: p_bDQ8CKn5Bsja1AL34KVg9T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QEJz72CkC3X5c5SX7736Cg
          claim_id: c_uZ6wGkNBhBKS3hFY5r1SGc
          source_id: s_yBPQ4hXrd688WJKgwpU8KS
          stance: supports
          locator: CBDB:25592
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（25592）
          source: &a1
            id: s_yBPQ4hXrd688WJKgwpU8KS
            source_type: api_record
            title: 中国历代人物传记资料库：王宗道（CBDB 25592）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25592&o=json
            external_identifier: CBDB:25592
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.914Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3d7fXXX3iveyQ7UNTMpxRa
        subject_person_id: p_bDQ8CKn5Bsja1AL34KVg9T
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗道，宋人物。籍贯鄞縣，入仕進士，曾任提舉常平茶鹽公事、提點刑獄司幹辦公事。（中国历代人物传记资料库 CBDB 25592）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Li5JrpNKyxK66nL9fStvmy
          claim_id: c_3d7fXXX3iveyQ7UNTMpxRa
          source_id: s_yBPQ4hXrd688WJKgwpU8KS
          stance: supports
          locator: CBDB:25592
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4dNu22nXX-Wk2izdZF31s5
        subject_person_id: p_RA8LBgUDtrLLPDFgrdefPD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bDQ8CKn5Bsja1AL34KVg9T
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eF-t9bePUF_ibsVTgIx9l8
          claim_id: c_4dNu22nXX-Wk2izdZF31s5
          source_id: s_yBPQ4hXrd688WJKgwpU8KS
          stance: supports
          locator: CBDB 双向互证（父 王時敘 ⇄ 子 王宗道）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_RA8LBgUDtrLLPDFgrdefPD
        status: active
        display_name: 王時敘
        merged_into_person_id: null
  children:
    - claim:
        id: c_5et1hVzzVnngPwOQmJ8D-I
        subject_person_id: p_bDQ8CKn5Bsja1AL34KVg9T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9p2UkiQzWTTUoMNMhQFEex
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2ebh293XhuxX0VMWr7Xp4D
          claim_id: c_5et1hVzzVnngPwOQmJ8D-I
          source_id: s_rMGA4y7MNgD1uB628eL3mH
          stance: supports
          locator: CBDB 双向互证（父 王宗道 ⇄ 子 王與義）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_rMGA4y7MNgD1uB628eL3mH
            source_type: api_record
            title: 中国历代人物传记资料库：王與義（CBDB 25595）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25595&o=json
            external_identifier: CBDB:25595
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.914Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9p2UkiQzWTTUoMNMhQFEex
        status: active
        display_name: 王與義
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宗道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗道 | accepted |
| bio.summary | 王宗道，宋人物。籍贯鄞縣，入仕進士，曾任提舉常平茶鹽公事、提點刑獄司幹辦公事。（中国历代人物传记资料库 CBDB 25592） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RA8LBgUDtrLLPDFgrdefPD | 王時敘 | accepted |
| children | p_9p2UkiQzWTTUoMNMhQFEex | 王與義 | accepted |

## 外部来源

- [中国历代人物传记资料库：王與義（CBDB 25595）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25595&o=json)
- [中国历代人物传记资料库：王宗道（CBDB 25592）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25592&o=json)
