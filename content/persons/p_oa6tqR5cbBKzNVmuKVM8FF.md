---
schema: wang-person/v1
id: p_oa6tqR5cbBKzNVmuKVM8FF
status: active
merged_into: null
display_name: 王宣
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WMqMzv1ZFKJpxXsGzPEJtu
        subject_person_id: p_oa6tqR5cbBKzNVmuKVM8FF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5jqse6x4c6pzNs4Cy5fv2y
          claim_id: c_WMqMzv1ZFKJpxXsGzPEJtu
          source_id: s_WPenu7yQi7NkB4tiyXkkZG
          stance: supports
          locator: CBDB:100717
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100717）
          source: &a1
            id: s_WPenu7yQi7NkB4tiyXkkZG
            source_type: api_record
            title: 中国历代人物传记资料库：王宣（CBDB 100717）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100717&o=json
            external_identifier: CBDB:100717
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.390Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FUwdUChLGDM5JXm6wdNM5o
        subject_person_id: p_oa6tqR5cbBKzNVmuKVM8FF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宣，元人物。曾任行中書省平章、宣慰司都元帥府都事、義兵都元帥。（中国历代人物传记资料库 CBDB 100717）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_69D9o06kVZPI1Nu91ZEslL
          claim_id: c_FUwdUChLGDM5JXm6wdNM5o
          source_id: s_WPenu7yQi7NkB4tiyXkkZG
          stance: supports
          locator: CBDB:100717
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_0D8XhW6msAFmLxVNYoLxTZ
        subject_person_id: p_oa6tqR5cbBKzNVmuKVM8FF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5AyUusRpbPK93QGGTuYXZH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m0k76Ok9rnV_CB6KCPXPSE
          claim_id: c_0D8XhW6msAFmLxVNYoLxTZ
          source_id: s_KBio1C1V7MyAa99FMAvQF3
          stance: supports
          locator: 元人傳記資料索引，518：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KBio1C1V7MyAa99FMAvQF3
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 100707）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100707&o=json
            external_identifier: CBDB:100707
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.380Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5AyUusRpbPK93QGGTuYXZH
        status: active
        display_name: 王信
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宣 | accepted |
| bio.summary | 王宣，元人物。曾任行中書省平章、宣慰司都元帥府都事、義兵都元帥。（中国历代人物传记资料库 CBDB 100717） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_5AyUusRpbPK93QGGTuYXZH | 王信 | accepted |

## 外部来源

- [中国历代人物传记资料库：王信（CBDB 100707）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100707&o=json)
- [中国历代人物传记资料库：王宣（CBDB 100717）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100717&o=json)
