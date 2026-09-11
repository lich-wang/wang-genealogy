---
schema: wang-person/v1
id: p_z2KrppHPtLom67wwLrWXDN
status: active
merged_into: null
display_name: 王繹
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VT6BdNJbJK2f9C3fmHhaVx
        subject_person_id: p_z2KrppHPtLom67wwLrWXDN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J6pAzaFiPT7KgjoGVk6Lvt
          claim_id: c_VT6BdNJbJK2f9C3fmHhaVx
          source_id: s_RzLzCyuxNFxhA9CNho3jxN
          stance: supports
          locator: CBDB:259644
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（259644）
          source: &a1
            id: s_RzLzCyuxNFxhA9CNho3jxN
            source_type: api_record
            title: 中国历代人物传记资料库：王繹（CBDB 259644）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259644&o=json
            external_identifier: CBDB:259644
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.469Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9BDQPB2tTbu3zRLUuRbTDV
        subject_person_id: p_z2KrppHPtLom67wwLrWXDN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繹，明人物。成化二十三年進士，籍贯安邱，曾任教諭。（中国历代人物传记资料库 CBDB 259644）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PHmOHRE8D39u2p-zx20Rl3
          claim_id: c_9BDQPB2tTbu3zRLUuRbTDV
          source_id: s_RzLzCyuxNFxhA9CNho3jxN
          stance: supports
          locator: CBDB:259644
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_wox-xWrvs8agldO416658L
        subject_person_id: p_z2KrppHPtLom67wwLrWXDN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rd5qTvBTthC6ZnBxJzkeri
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7s9bidGmmw8PmjqUgFm1s4
          claim_id: c_wox-xWrvs8agldO416658L
          source_id: s_RzLzCyuxNFxhA9CNho3jxN
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百零八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rd5qTvBTthC6ZnBxJzkeri
        status: active
        display_name: 王用
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王繹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繹 | accepted |
| bio.summary | 王繹，明人物。成化二十三年進士，籍贯安邱，曾任教諭。（中国历代人物传记资料库 CBDB 259644） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_rd5qTvBTthC6ZnBxJzkeri | 王用 | accepted |

## 外部来源

- [中国历代人物传记资料库：王繹（CBDB 259644）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259644&o=json)
