---
schema: wang-person/v1
id: p_YNnM29jfUgNXMA2gCi8ghx
status: active
merged_into: null
display_name: 王桂發
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZG59qa7xeCrGLwgXaZ6Jni
        subject_person_id: p_YNnM29jfUgNXMA2gCi8ghx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桂發
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_os8VnmtFK51AsN8TgZfNFC
          claim_id: c_ZG59qa7xeCrGLwgXaZ6Jni
          source_id: s_mWyarvM7sjN2s66SKfoC4F
          stance: supports
          locator: CBDB:37994
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37994）
          source: &a1
            id: s_mWyarvM7sjN2s66SKfoC4F
            source_type: api_record
            title: 中国历代人物传记资料库：王桂發（CBDB 37994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37994&o=json
            external_identifier: CBDB:37994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.312Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Fs3EZqJtHHEUqT9RbbCfY2
        subject_person_id: p_YNnM29jfUgNXMA2gCi8ghx
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1217年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YamYMUtyJ2EDmSRMjNE72b
          claim_id: c_Fs3EZqJtHHEUqT9RbbCfY2
          source_id: s_mWyarvM7sjN2s66SKfoC4F
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DCTEMP5hfMDbLqEnGdQbBN
        subject_person_id: p_YNnM29jfUgNXMA2gCi8ghx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tonw159EKAE37wXnLqfpf8
          claim_id: c_DCTEMP5hfMDbLqEnGdQbBN
          source_id: s_mWyarvM7sjN2s66SKfoC4F
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_YqQk4hJf-337VI16q89eZz
        subject_person_id: p_7xFeon8XjY4faqRLzNiUEf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YNnM29jfUgNXMA2gCi8ghx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oxoMAzhrOf8Ih5A82xly4Q
          claim_id: c_YqQk4hJf-337VI16q89eZz
          source_id: s_8FdnMSTGJqAjC99c9f51nQ
          stance: supports
          locator: 寶祐登科錄：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8FdnMSTGJqAjC99c9f51nQ
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉言（CBDB 97833）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97833&o=json
            external_identifier: CBDB:97833
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.189Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7xFeon8XjY4faqRLzNiUEf
        status: active
        display_name: 王嘉言
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_1Ha6wO-WoZGSPJmdWJaP1O
        subject_person_id: p_DmvAtzDarKwpQrK8485z6q
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_YNnM29jfUgNXMA2gCi8ghx
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PS1QJHam2IMElSWgah9jXJ
          claim_id: c_1Ha6wO-WoZGSPJmdWJaP1O
          source_id: s_butDVDs8KqYeXJdkcEYE7v
          stance: supports
          locator: 寶祐登科錄：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_butDVDs8KqYeXJdkcEYE7v
            source_type: api_record
            title: 中国历代人物传记资料库：王維（CBDB 137624）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=137624&o=json
            external_identifier: CBDB:137624
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.347Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DmvAtzDarKwpQrK8485z6q
        status: active
        display_name: 王維
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王桂發

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王桂發 | accepted |
| birth.date | 1217年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7xFeon8XjY4faqRLzNiUEf | 王嘉言 | accepted |
| ancestors | p_DmvAtzDarKwpQrK8485z6q | 王維 | accepted |

## 外部来源

- [中国历代人物传记资料库：王桂發（CBDB 37994）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37994&o=json)
- [中国历代人物传记资料库：王嘉言（CBDB 97833）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97833&o=json)
- [中国历代人物传记资料库：王維（CBDB 137624）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=137624&o=json)
