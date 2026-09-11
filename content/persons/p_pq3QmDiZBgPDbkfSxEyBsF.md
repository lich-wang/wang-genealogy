---
schema: wang-person/v1
id: p_pq3QmDiZBgPDbkfSxEyBsF
status: active
merged_into: null
display_name: 王櫲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5q2MCgayy7orG7NCYyi4cc
        subject_person_id: p_pq3QmDiZBgPDbkfSxEyBsF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王櫲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_y5eEX8fkfY39MTeRtHP9C3
          claim_id: c_5q2MCgayy7orG7NCYyi4cc
          source_id: s_MbLNtVkWp2QKRt69kbRjmw
          stance: supports
          locator: CBDB:638879
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638879）
          source: &a1
            id: s_MbLNtVkWp2QKRt69kbRjmw
            source_type: api_record
            title: 中国历代人物传记资料库：王櫲（CBDB 638879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638879&o=json
            external_identifier: CBDB:638879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.776Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_c93zg3C46m2qwbtohG83eq
        subject_person_id: p_pq3QmDiZBgPDbkfSxEyBsF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王櫲，清人物。籍贯保德直隸州直轄地方，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 638879）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_17WX821fQL8ITwNYP1vSml
          claim_id: c_c93zg3C46m2qwbtohG83eq
          source_id: s_MbLNtVkWp2QKRt69kbRjmw
          stance: supports
          locator: CBDB:638879
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

# 王櫲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王櫲 | accepted |
| bio.summary | 王櫲，清人物。籍贯保德直隸州直轄地方，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 638879） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王櫲（CBDB 638879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638879&o=json)
