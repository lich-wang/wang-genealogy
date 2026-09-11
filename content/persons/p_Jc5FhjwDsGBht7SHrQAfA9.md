---
schema: wang-person/v1
id: p_Jc5FhjwDsGBht7SHrQAfA9
status: active
merged_into: null
display_name: 王仲英
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_24UQLAKxWPFF8hXAdbG76v
        subject_person_id: p_Jc5FhjwDsGBht7SHrQAfA9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲英
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Y38X9aD6DhHMG27CdQ6kyP
          claim_id: c_24UQLAKxWPFF8hXAdbG76v
          source_id: s_KpNKbypnCLENfB91uTWMQ5
          stance: supports
          locator: CBDB:28729
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（28729）
          source: &a1
            id: s_KpNKbypnCLENfB91uTWMQ5
            source_type: api_record
            title: 中国历代人物传记资料库：王仲英（CBDB 28729）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28729&o=json
            external_identifier: CBDB:28729
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.975Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q5aG4rjg9qEnEBR8e4eHGu
        subject_person_id: p_Jc5FhjwDsGBht7SHrQAfA9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲英，金人物。籍贯汲縣。（中国历代人物传记资料库 CBDB 28729）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4K_7pM6N4GA7L3EyUXGKrc
          claim_id: c_q5aG4rjg9qEnEBR8e4eHGu
          source_id: s_KpNKbypnCLENfB91uTWMQ5
          stance: supports
          locator: CBDB:28729
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_pWRC4D262bVpKX9wRMI3tu
        subject_person_id: p_Jc5FhjwDsGBht7SHrQAfA9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kXhN1ZZdd8m99X37QRa5g5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ce76cUjgq_xJyr_RaJx9q1
          claim_id: c_pWRC4D262bVpKX9wRMI3tu
          source_id: s_KpNKbypnCLENfB91uTWMQ5
          stance: supports
          locator: CBDB 双向互证（子 王經 ⇄ 父 王仲英）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_kXhN1ZZdd8m99X37QRa5g5
        status: active
        display_name: 王經
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仲英

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲英 | accepted |
| bio.summary | 王仲英，金人物。籍贯汲縣。（中国历代人物传记资料库 CBDB 28729） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_kXhN1ZZdd8m99X37QRa5g5 | 王經 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仲英（CBDB 28729）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28729&o=json)
