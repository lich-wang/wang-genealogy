---
schema: wang-person/v1
id: p_QKGHtYGTuj6QJUt8CLzejc
status: active
merged_into: null
display_name: 王潤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NFp2VvdH6ZiLNdZuFoCoiM
        subject_person_id: p_QKGHtYGTuj6QJUt8CLzejc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Qeij2U6FcS5K5p8GNM1YVW
          claim_id: c_NFp2VvdH6ZiLNdZuFoCoiM
          source_id: s_H7FBEpnide919Kig9u7RNH
          stance: supports
          locator: CBDB:495479
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（495479）
          source: &a1
            id: s_H7FBEpnide919Kig9u7RNH
            source_type: api_record
            title: 中国历代人物传记资料库：王潤（CBDB 495479）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=495479&o=json
            external_identifier: CBDB:495479
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.497Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_94W66bb3V9KqKRrxhaDJPs
        subject_person_id: p_QKGHtYGTuj6QJUt8CLzejc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王潤，明人物。入仕貢生: 歲貢、常貢、挨貢，曾任訓導。（中国历代人物传记资料库 CBDB 495479）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CAw66WVHmxytZlt_pGGyP5
          claim_id: c_94W66bb3V9KqKRrxhaDJPs
          source_id: s_H7FBEpnide919Kig9u7RNH
          stance: supports
          locator: CBDB:495479
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

# 王潤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王潤 | accepted |
| bio.summary | 王潤，明人物。入仕貢生: 歲貢、常貢、挨貢，曾任訓導。（中国历代人物传记资料库 CBDB 495479） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王潤（CBDB 495479）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=495479&o=json)
