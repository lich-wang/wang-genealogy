---
schema: wang-person/v1
id: p_Qvi4bpPzBmsqf5Y7oUFpd5
status: active
merged_into: null
display_name: 王珀
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G5gWLZn2ehWMenQvxbjGtT
        subject_person_id: p_Qvi4bpPzBmsqf5Y7oUFpd5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v66x6bMKt6skPgcDYRNxqQ
          claim_id: c_G5gWLZn2ehWMenQvxbjGtT
          source_id: s_9pMRqs8hG1qqY7xJrWAJb4
          stance: supports
          locator: CBDB:126601
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126601）
          source: &a1
            id: s_9pMRqs8hG1qqY7xJrWAJb4
            source_type: api_record
            title: 中国历代人物传记资料库：王珀（CBDB 126601）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126601&o=json
            external_identifier: CBDB:126601
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.049Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oV1WFs6yhShdVcvUh57yaX
        subject_person_id: p_Qvi4bpPzBmsqf5Y7oUFpd5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珀，明人物。明清進士進士，籍贯武進，入仕進士，曾任同知、御史、知府。（中国历代人物传记资料库 CBDB 126601）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6IgoS8xaYMPBkj-eogoRoX
          claim_id: c_oV1WFs6yhShdVcvUh57yaX
          source_id: s_9pMRqs8hG1qqY7xJrWAJb4
          stance: supports
          locator: CBDB:126601
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dyeT2s8JU97hj7a8Dkq0Xe
        subject_person_id: p_MKEkt3Lg84W4AyK4JA3PFs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Qvi4bpPzBmsqf5Y7oUFpd5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Tk3JfI7hCsAj4VKp5OogoA
          claim_id: c_dyeT2s8JU97hj7a8Dkq0Xe
          source_id: s_Jk39pzbEZ2c6j87iTvReLx
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百八十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Jk39pzbEZ2c6j87iTvReLx
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮（CBDB 260373）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260373&o=json
            external_identifier: CBDB:260373
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.500Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MKEkt3Lg84W4AyK4JA3PFs
        status: active
        display_name: 王鎮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_pndgOwKPz6-v6EzDSGsXyJ
        subject_person_id: p_h6LguHDvB9Ao8LJA2zeatH
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Qvi4bpPzBmsqf5Y7oUFpd5
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RNemQORVFJ9UX2ehJzv-hg
          claim_id: c_pndgOwKPz6-v6EzDSGsXyJ
          source_id: s_U2kXDEiArRTpa89aMPWqK7
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百八十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_U2kXDEiArRTpa89aMPWqK7
            source_type: api_record
            title: 中国历代人物传记资料库：王祿（CBDB 260372）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260372&o=json
            external_identifier: CBDB:260372
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.499Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_h6LguHDvB9Ao8LJA2zeatH
        status: active
        display_name: 王祿
        merged_into_person_id: null
    - claim:
        id: c_xHtqGmbSvXj5tAa8A6y7Zx
        subject_person_id: p_W84gmRoBdwTDoRpNLAA3Lm
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Qvi4bpPzBmsqf5Y7oUFpd5
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_13AOkz4tZcuHy6jDtrzP1k
          claim_id: c_xHtqGmbSvXj5tAa8A6y7Zx
          source_id: s_JCSysUGDK5yGQ6nhESv7ne
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百八十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JCSysUGDK5yGQ6nhESv7ne
            source_type: api_record
            title: 中国历代人物传记资料库：王彥文（CBDB 260371）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260371&o=json
            external_identifier: CBDB:260371
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.498Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_W84gmRoBdwTDoRpNLAA3Lm
        status: active
        display_name: 王彥文
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王珀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珀 | accepted |
| bio.summary | 王珀，明人物。明清進士進士，籍贯武進，入仕進士，曾任同知、御史、知府。（中国历代人物传记资料库 CBDB 126601） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MKEkt3Lg84W4AyK4JA3PFs | 王鎮 | accepted |
| ancestors | p_h6LguHDvB9Ao8LJA2zeatH | 王祿 | accepted |
| ancestors | p_W84gmRoBdwTDoRpNLAA3Lm | 王彥文 | accepted |

## 外部来源

- [中国历代人物传记资料库：王祿（CBDB 260372）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260372&o=json)
- [中国历代人物传记资料库：王珀（CBDB 126601）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126601&o=json)
- [中国历代人物传记资料库：王彥文（CBDB 260371）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260371&o=json)
- [中国历代人物传记资料库：王鎮（CBDB 260373）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260373&o=json)
