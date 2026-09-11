---
schema: wang-person/v1
id: p_a5US9NMoZxcp1VNS1KgXkJ
status: active
merged_into: null
display_name: 王拔萃
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_R4nSsa8YsPhmY3U2B94JR6
        subject_person_id: p_a5US9NMoZxcp1VNS1KgXkJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王拔萃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Cth92j8VNmooq5UizXTmUe
          claim_id: c_R4nSsa8YsPhmY3U2B94JR6
          source_id: s_cE9JT6SfnSjyGJVnGbS8Rw
          stance: supports
          locator: CBDB:635607
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635607）
          source: &a1
            id: s_cE9JT6SfnSjyGJVnGbS8Rw
            source_type: api_record
            title: 中国历代人物传记资料库：王拔萃（CBDB 635607）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635607&o=json
            external_identifier: CBDB:635607
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.984Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q56Esdw5qzeJzAFtPTrtPz
        subject_person_id: p_a5US9NMoZxcp1VNS1KgXkJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王拔萃，清人物。籍贯寧國，入仕貢生: 副貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 635607）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HKtVrmQaUiKt7-_qPrnQRA
          claim_id: c_Q56Esdw5qzeJzAFtPTrtPz
          source_id: s_cE9JT6SfnSjyGJVnGbS8Rw
          stance: supports
          locator: CBDB:635607
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

# 王拔萃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王拔萃 | accepted |
| bio.summary | 王拔萃，清人物。籍贯寧國，入仕貢生: 副貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 635607） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王拔萃（CBDB 635607）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635607&o=json)
