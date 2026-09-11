---
schema: wang-person/v1
id: p_Ym9fvs9sydA5YA8AtBg8zN
status: active
merged_into: null
display_name: 王毅
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CJCNcjpoa1px4eVDJ1gq2Q
        subject_person_id: p_Ym9fvs9sydA5YA8AtBg8zN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王毅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SP4F9bb6ySp3r9cpSY3bkS
          claim_id: c_CJCNcjpoa1px4eVDJ1gq2Q
          source_id: s_idite91Dk1ez9Li5G76UgX
          stance: supports
          locator: CBDB:298691
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（298691）
          source: &a1
            id: s_idite91Dk1ez9Li5G76UgX
            source_type: api_record
            title: 中国历代人物传记资料库：王毅（CBDB 298691）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298691&o=json
            external_identifier: CBDB:298691
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.591Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6wUM43CvrqGTkQRFYr6cFf
        subject_person_id: p_Ym9fvs9sydA5YA8AtBg8zN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王毅，明人物。天順元年進士，曾任百戶。（中国历代人物传记资料库 CBDB 298691）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nZOsl9rnPYoeD0khCqzQN7
          claim_id: c_6wUM43CvrqGTkQRFYr6cFf
          source_id: s_idite91Dk1ez9Li5G76UgX
          stance: supports
          locator: CBDB:298691
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
  descendants:
    - claim:
        id: c_QZBXfylBFN8bN00Ctd3jQr
        subject_person_id: p_Ym9fvs9sydA5YA8AtBg8zN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_26otXuRvyNkWGBZaSdCQ3z
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d7HwJnJ1sVWcOGWvPfYGVx
          claim_id: c_QZBXfylBFN8bN00Ctd3jQr
          source_id: s_T83fogLUrutThepXCGjKi8
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第八十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_T83fogLUrutThepXCGjKi8
            source_type: api_record
            title: 中国历代人物传记资料库：王翰（CBDB 198648）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198648&o=json
            external_identifier: CBDB:198648
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.505Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_26otXuRvyNkWGBZaSdCQ3z
        status: active
        display_name: 王翰
        merged_into_person_id: null
  other: []
---

# 王毅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王毅 | accepted |
| bio.summary | 王毅，明人物。天順元年進士，曾任百戶。（中国历代人物传记资料库 CBDB 298691） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_26otXuRvyNkWGBZaSdCQ3z | 王翰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王翰（CBDB 198648）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198648&o=json)
- [中国历代人物传记资料库：王毅（CBDB 298691）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298691&o=json)
