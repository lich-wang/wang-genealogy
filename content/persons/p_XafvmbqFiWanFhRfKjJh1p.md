---
schema: wang-person/v1
id: p_XafvmbqFiWanFhRfKjJh1p
status: active
merged_into: null
display_name: 王通
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VwnH2UjTQoVierpibwoAL3
        subject_person_id: p_XafvmbqFiWanFhRfKjJh1p
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王通，明人物。中国历代人物传记资料库（CBDB）以人物编号 314678 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Wj294oPWAAyeBn3d6DhAMT
          claim_id: c_VwnH2UjTQoVierpibwoAL3
          source_id: s_V82c4Y2GCs47mYwENCUT7M
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_V82c4Y2GCs47mYwENCUT7M
            source_type: api_record
            title: 维基数据：王通（Q45442342）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45442342
            external_identifier: Q45442342
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:17.760Z
            metadata_json: null
        - id: cs_qdNA1sUIO8SuS6KkHenAFp
          claim_id: c_VwnH2UjTQoVierpibwoAL3
          source_id: s_bdco3aL7241Thw7aSFGx7h
          stance: supports
          locator: CBDB:314678
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_bdco3aL7241Thw7aSFGx7h
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王通（314678）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314678&o=json
            external_identifier: CBDB:314678
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:17.946Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nt2MgHihvQC1xQsF8mLKMN
        subject_person_id: p_XafvmbqFiWanFhRfKjJh1p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王通
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_F59vH5Fno37K8Qko9cFr3f
          claim_id: c_nt2MgHihvQC1xQsF8mLKMN
          source_id: s_V82c4Y2GCs47mYwENCUT7M
          stance: supports
          locator: Q45442342
          quotation: null
          interpretation_note: null
          source:
            id: s_V82c4Y2GCs47mYwENCUT7M
            source_type: api_record
            title: 维基数据：王通（Q45442342）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45442342
            external_identifier: Q45442342
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:17.760Z
            metadata_json: null
        - id: cs_zQsCo2w7MTR2idCT533nD9
          claim_id: c_nt2MgHihvQC1xQsF8mLKMN
          source_id: s_bdco3aL7241Thw7aSFGx7h
          stance: supports
          locator: Q45442342
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
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王通

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王通，明人物。中国历代人物传记资料库（CBDB）以人物编号 314678 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王通 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王通（Q45442342）](https://www.wikidata.org/wiki/Q45442342)
- [CBDB 中国历代人物传记资料库：王通（314678）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314678&o=json)
