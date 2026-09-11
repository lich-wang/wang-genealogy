---
schema: wang-person/v1
id: p_Lt6JLAH4SiBHH21rFBuPBM
status: active
merged_into: null
display_name: 王蘊葵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GAQeVqpdw5v31UTvpk2wum
        subject_person_id: p_Lt6JLAH4SiBHH21rFBuPBM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘊葵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8GAuicmkZehhReRSR2prQ1
          claim_id: c_GAQeVqpdw5v31UTvpk2wum
          source_id: s_7rcxXw89Nfud4G3h3Dxf15
          stance: supports
          locator: CBDB:640187
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640187）
          source: &a1
            id: s_7rcxXw89Nfud4G3h3Dxf15
            source_type: api_record
            title: 中国历代人物传记资料库：王蘊葵（CBDB 640187）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640187&o=json
            external_identifier: CBDB:640187
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.177Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9H8bj37nVYP5R5wfFPtwFC
        subject_person_id: p_Lt6JLAH4SiBHH21rFBuPBM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王蘊葵，清人物。籍贯靈璧，入仕學校: 生員(庠生)，曾任知府。（中国历代人物传记资料库 CBDB 640187）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2kuAS52TiBxEFc5RK9hwAq
          claim_id: c_9H8bj37nVYP5R5wfFPtwFC
          source_id: s_7rcxXw89Nfud4G3h3Dxf15
          stance: supports
          locator: CBDB:640187
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

# 王蘊葵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蘊葵 | accepted |
| bio.summary | 王蘊葵，清人物。籍贯靈璧，入仕學校: 生員(庠生)，曾任知府。（中国历代人物传记资料库 CBDB 640187） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王蘊葵（CBDB 640187）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640187&o=json)
