---
schema: wang-person/v1
id: p_nyfSKnB9avdL1QftK8B1AW
status: active
merged_into: null
display_name: 王紹宗
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_s91nKr6DxN2rmEa9PhVpB7
        subject_person_id: p_nyfSKnB9avdL1QftK8B1AW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_brtBTC8vcqwVVjxwZTXdkH
          claim_id: c_s91nKr6DxN2rmEa9PhVpB7
          source_id: s_jJi6hk2AVKfjLxFym88Rpo
          stance: supports
          locator: CBDB:31162
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（31162）
          source: &a1
            id: s_jJi6hk2AVKfjLxFym88Rpo
            source_type: api_record
            title: 中国历代人物传记资料库：王紹宗（CBDB 31162）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=31162&o=json
            external_identifier: CBDB:31162
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.046Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n6ee2YQEHCQhq3TqmZ2PXB
        subject_person_id: p_nyfSKnB9avdL1QftK8B1AW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹宗，唐人物。籍贯江都，身份为書法家、畫家，入仕徵辟，曾任麟臺少監、太子侍讀、太子文學。（中国历代人物传记资料库 CBDB 31162）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aDHD3cYNJUZQ3nDARBRkrU
          claim_id: c_n6ee2YQEHCQhq3TqmZ2PXB
          source_id: s_jJi6hk2AVKfjLxFym88Rpo
          stance: supports
          locator: CBDB:31162
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
        id: c_dSn6NBvsqOwemZhURCdsF-
        subject_person_id: p_6P1fo1PnFdXvCWVqBBsEtM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nyfSKnB9avdL1QftK8B1AW
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9V9VjXyWPjxFOPsyEMY8NJ
          claim_id: c_dSn6NBvsqOwemZhURCdsF-
          source_id: s_jJi6hk2AVKfjLxFym88Rpo
          stance: supports
          locator: CBDB 双向互证（曾祖 王銓 ⇄ 曾孫; 重孫 王紹宗）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_6P1fo1PnFdXvCWVqBBsEtM
        status: active
        display_name: 王铨
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王紹宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹宗 | accepted |
| bio.summary | 王紹宗，唐人物。籍贯江都，身份为書法家、畫家，入仕徵辟，曾任麟臺少監、太子侍讀、太子文學。（中国历代人物传记资料库 CBDB 31162） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_6P1fo1PnFdXvCWVqBBsEtM | 王铨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紹宗（CBDB 31162）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=31162&o=json)
