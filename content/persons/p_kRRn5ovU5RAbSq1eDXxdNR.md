---
schema: wang-person/v1
id: p_kRRn5ovU5RAbSq1eDXxdNR
status: active
merged_into: null
display_name: 王子武
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_649vacJgV2LMA7nMP7LcsT
        subject_person_id: p_kRRn5ovU5RAbSq1eDXxdNR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子武
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MgUnS3DtF96M9eCEkF62Ar
          claim_id: c_649vacJgV2LMA7nMP7LcsT
          source_id: s_3cfS8RyA4aeuM5GyYVvDzr
          stance: supports
          locator: CBDB:573226
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（573226）
          source: &a1
            id: s_3cfS8RyA4aeuM5GyYVvDzr
            source_type: api_record
            title: 中国历代人物传记资料库：王子武（CBDB 573226）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573226&o=json
            external_identifier: CBDB:573226
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.896Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HoKFthLx2tyLY4FpFxooDF
        subject_person_id: p_kRRn5ovU5RAbSq1eDXxdNR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子武，宋人物。曾任武功大夫、兵馬鈐轄。（中国历代人物传记资料库 CBDB 573226）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aVw4lDYkQ6nRpPkwxdfpSX
          claim_id: c_HoKFthLx2tyLY4FpFxooDF
          source_id: s_3cfS8RyA4aeuM5GyYVvDzr
          stance: supports
          locator: CBDB:573226
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

# 王子武

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子武 | accepted |
| bio.summary | 王子武，宋人物。曾任武功大夫、兵馬鈐轄。（中国历代人物传记资料库 CBDB 573226） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王子武（CBDB 573226）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573226&o=json)
