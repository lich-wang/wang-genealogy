---
schema: wang-person/v1
id: p_bANHPZceC1LtNe4Z8KB6Ac
status: active
merged_into: null
display_name: 王殷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Eg99EMUAH4oBznzbGGykLf
        subject_person_id: p_bANHPZceC1LtNe4Z8KB6Ac
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王殷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7XU2ARFBfFVCaUkst4ubbD
          claim_id: c_Eg99EMUAH4oBznzbGGykLf
          source_id: s_r7dH3bLnLMm1pvTw6B2LcH
          stance: supports
          locator: CBDB:459819
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（459819）
          source: &a1
            id: s_r7dH3bLnLMm1pvTw6B2LcH
            source_type: api_record
            title: 中国历代人物传记资料库：王殷（CBDB 459819）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=459819&o=json
            external_identifier: CBDB:459819
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.727Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ato8AgTrP19Mo2i8Lgywzv
        subject_person_id: p_bANHPZceC1LtNe4Z8KB6Ac
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王殷，明人物。入仕貢生: 歲貢、常貢、挨貢，曾任訓導。（中国历代人物传记资料库 CBDB 459819）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_G7xzRAwUh_B7EIHC08lslb
          claim_id: c_Ato8AgTrP19Mo2i8Lgywzv
          source_id: s_r7dH3bLnLMm1pvTw6B2LcH
          stance: supports
          locator: CBDB:459819
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

# 王殷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王殷 | accepted |
| bio.summary | 王殷，明人物。入仕貢生: 歲貢、常貢、挨貢，曾任訓導。（中国历代人物传记资料库 CBDB 459819） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王殷（CBDB 459819）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=459819&o=json)
