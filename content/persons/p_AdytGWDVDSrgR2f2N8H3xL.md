---
schema: wang-person/v1
id: p_AdytGWDVDSrgR2f2N8H3xL
status: active
merged_into: null
display_name: 王塈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LCtoBWFj5PTgeeXGrQB8Ra
        subject_person_id: p_AdytGWDVDSrgR2f2N8H3xL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王塈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xQJWoF1GF5dwDNzKFhxzxg
          claim_id: c_LCtoBWFj5PTgeeXGrQB8Ra
          source_id: s_4FweU2vt3h5qB4HSGwmYP2
          stance: supports
          locator: CBDB:39250
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39250）
          source: &a1
            id: s_4FweU2vt3h5qB4HSGwmYP2
            source_type: api_record
            title: 中国历代人物传记资料库：王塈（CBDB 39250）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39250&o=json
            external_identifier: CBDB:39250
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.602Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LhHT5RXQ5NzGmE47TBe2vd
        subject_person_id: p_AdytGWDVDSrgR2f2N8H3xL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王塈，宋人物。籍贯開封府，身份为史學家、工於作賦，入仕進士，曾任輕車都尉、上騎都尉、中書舍人。（中国历代人物传记资料库 CBDB 39250）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IURhCGINF-1OdItFKpyCq_
          claim_id: c_LhHT5RXQ5NzGmE47TBe2vd
          source_id: s_4FweU2vt3h5qB4HSGwmYP2
          stance: supports
          locator: CBDB:39250
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

# 王塈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王塈 | accepted |
| bio.summary | 王塈，宋人物。籍贯開封府，身份为史學家、工於作賦，入仕進士，曾任輕車都尉、上騎都尉、中書舍人。（中国历代人物传记资料库 CBDB 39250） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王塈（CBDB 39250）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39250&o=json)
