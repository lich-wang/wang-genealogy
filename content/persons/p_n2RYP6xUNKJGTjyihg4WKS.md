---
schema: wang-person/v1
id: p_n2RYP6xUNKJGTjyihg4WKS
status: active
merged_into: null
display_name: 王廣年
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_a9YwF1Mq9rogBMXb72GMEd
        subject_person_id: p_n2RYP6xUNKJGTjyihg4WKS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廣年
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6iJV1NCZ73dK4RdmeKBCdF
          claim_id: c_a9YwF1Mq9rogBMXb72GMEd
          source_id: s_dnQEjp4swdo67A1xL59NN7
          stance: supports
          locator: CBDB:637451
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637451）
          source: &a1
            id: s_dnQEjp4swdo67A1xL59NN7
            source_type: api_record
            title: 中国历代人物传记资料库：王廣年（CBDB 637451）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637451&o=json
            external_identifier: CBDB:637451
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.404Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8PntLLcHSKM8Bh623aL4hX
        subject_person_id: p_n2RYP6xUNKJGTjyihg4WKS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廣年，清人物。籍贯綏德直隸州直轄地方，入仕優貢生，曾任教授、教諭、訓導。（中国历代人物传记资料库 CBDB 637451）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_t0aGJQ9v_kK8UlL3YDWUlf
          claim_id: c_8PntLLcHSKM8Bh623aL4hX
          source_id: s_dnQEjp4swdo67A1xL59NN7
          stance: supports
          locator: CBDB:637451
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

# 王廣年

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廣年 | accepted |
| bio.summary | 王廣年，清人物。籍贯綏德直隸州直轄地方，入仕優貢生，曾任教授、教諭、訓導。（中国历代人物传记资料库 CBDB 637451） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廣年（CBDB 637451）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637451&o=json)
