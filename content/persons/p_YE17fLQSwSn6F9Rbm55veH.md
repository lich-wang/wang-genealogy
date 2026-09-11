---
schema: wang-person/v1
id: p_YE17fLQSwSn6F9Rbm55veH
status: active
merged_into: null
display_name: 王志
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LS1Z8TDiha9Xc177C8QKK4
        subject_person_id: p_YE17fLQSwSn6F9Rbm55veH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5YVtgn46xngCroUUt9NJUB
          claim_id: c_LS1Z8TDiha9Xc177C8QKK4
          source_id: s_wGmA4JNjrQ6tudvvZeocfG
          stance: supports
          locator: CBDB:39004
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39004）
          source: &a1
            id: s_wGmA4JNjrQ6tudvvZeocfG
            source_type: api_record
            title: 中国历代人物传记资料库：王志（CBDB 39004）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39004&o=json
            external_identifier: CBDB:39004
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.582Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5bDdCp2rQ15hTgu52gm2GA
        subject_person_id: p_YE17fLQSwSn6F9Rbm55veH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志，宋人物。曾任東頭供奉官、右班殿直。（中国历代人物传记资料库 CBDB 39004）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_D1f8b1Oarmfq8Su5_pLXYP
          claim_id: c_5bDdCp2rQ15hTgu52gm2GA
          source_id: s_wGmA4JNjrQ6tudvvZeocfG
          stance: supports
          locator: CBDB:39004
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

# 王志

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王志 | accepted |
| bio.summary | 王志，宋人物。曾任東頭供奉官、右班殿直。（中国历代人物传记资料库 CBDB 39004） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王志（CBDB 39004）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39004&o=json)
