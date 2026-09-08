---
schema: wang-person/v1
id: p_hCnqrGYXkPvJd8A849zxFy
status: active
merged_into: null
display_name: 赵氏
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c__DNrERNd98aCgJ8cpDvQdp
        subject_person_id: p_hCnqrGYXkPvJd8A849zxFy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 赵氏，王原相妻。维基数据以独立条目 Q65854661 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Us1XeeIbasYL4HGQf3xMz_
          claim_id: c__DNrERNd98aCgJ8cpDvQdp
          source_id: s_7B1JiyVP6w7s8XMHDbcAFT
          stance: supports
          locator: Q65854661
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_7B1JiyVP6w7s8XMHDbcAFT
            source_type: api_record
            title: 维基数据：赵氏（Q65854661）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65854661
            external_identifier: Q65854661
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:37.127Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_yzN4TzMPh7agVx3w1w7JY2
        subject_person_id: p_hCnqrGYXkPvJd8A849zxFy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 赵氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1opfAwugvkc9qNqEhgejQ5
          claim_id: c_yzN4TzMPh7agVx3w1w7JY2
          source_id: s_Fd495i8KJ8DFv3fppa6u6D
          stance: supports
          locator: Q65854661
          quotation: null
          interpretation_note: null
          source:
            id: s_Fd495i8KJ8DFv3fppa6u6D
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：趙氏（327870）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327870&o=json
            external_identifier: CBDB:327870
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:37.312Z
            metadata_json: null
        - id: cs_HDAzH9MkKvrvPCmKFYZx2Y
          claim_id: c_yzN4TzMPh7agVx3w1w7JY2
          source_id: s_7B1JiyVP6w7s8XMHDbcAFT
          stance: supports
          locator: Q65854661
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_WwFRsvWURAU8GTnw7qRDpD
        subject_person_id: p_ghyYDQ5eZ8uxN8ip6BX7KC
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_hCnqrGYXkPvJd8A849zxFy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tXt8emL1usFoHQyjcD5ZxW
          claim_id: c_WwFRsvWURAU8GTnw7qRDpD
          source_id: s_dXQa8yj97rf6Qh1MERKn2v
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_dXQa8yj97rf6Qh1MERKn2v
            source_type: api_record
            title: 维基数据：王原相（Q45551627）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45551627
            external_identifier: Q45551627
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:26.496Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8E%9F%E7%9B%B8
        - id: cs_A7qZGUxNGdiNMFrWHZjzhM
          claim_id: c_WwFRsvWURAU8GTnw7qRDpD
          source_id: s_7B1JiyVP6w7s8XMHDbcAFT
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_PXqwAdJtP1gc3TQMp15fpL
          claim_id: c_WwFRsvWURAU8GTnw7qRDpD
          source_id: s_xwJZPTtqthh3Js24PnKAnj
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：嘉靖四十一年進士登科錄:一卷
          source:
            id: s_xwJZPTtqthh3Js24PnKAnj
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王原相（205067）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205067&o=json
            external_identifier: CBDB:205067
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:26.639Z
            metadata_json: null
      object_person:
        id: p_ghyYDQ5eZ8uxN8ip6BX7KC
        status: active
        display_name: 王原相
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 赵氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 赵氏，王原相妻。维基数据以独立条目 Q65854661 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 赵氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_ghyYDQ5eZ8uxN8ip6BX7KC | 王原相 | accepted |

## 外部来源

- [维基数据：王原相（Q45551627）](https://www.wikidata.org/wiki/Q45551627)
- [维基数据：赵氏（Q65854661）](https://www.wikidata.org/wiki/Q65854661)
- [CBDB 中国历代人物传记资料库：王原相（205067）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205067&o=json)
- [CBDB 中国历代人物传记资料库：趙氏（327870）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327870&o=json)
