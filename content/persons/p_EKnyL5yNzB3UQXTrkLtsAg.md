---
schema: wang-person/v1
id: p_EKnyL5yNzB3UQXTrkLtsAg
status: active
merged_into: null
display_name: 王鎮
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M45cAyDbfozmFPg2EGXuKc
        subject_person_id: p_EKnyL5yNzB3UQXTrkLtsAg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cySg5zovR1KDC6mT6YHyFF
          claim_id: c_M45cAyDbfozmFPg2EGXuKc
          source_id: s_ocnBND2ZpeAEqtQToHFBV8
          stance: supports
          locator: CBDB:208004
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（208004）
          source: &a1
            id: s_ocnBND2ZpeAEqtQToHFBV8
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮（CBDB 208004）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208004&o=json
            external_identifier: CBDB:208004
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.937Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9ZDtiDm3X63g3CEUR3Bctz
        subject_person_id: p_EKnyL5yNzB3UQXTrkLtsAg
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1407年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cDCbwPMmVonMnxg235PULF
          claim_id: c_9ZDtiDm3X63g3CEUR3Bctz
          source_id: s_ocnBND2ZpeAEqtQToHFBV8
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
        id: c_7rfPH97QaRKLjCM2LW1XBd
        subject_person_id: p_EKnyL5yNzB3UQXTrkLtsAg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎮（生于1407年），明人物。明清進士進士，籍贯濟寧州，入仕進士。（中国历代人物传记资料库 CBDB 208004）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kZI6q-XENe2Y70c4Dadqaa
          claim_id: c_7rfPH97QaRKLjCM2LW1XBd
          source_id: s_ocnBND2ZpeAEqtQToHFBV8
          stance: supports
          locator: CBDB:208004
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qGvjGbAmTdtNdZZuggdsS6
        subject_person_id: p_b2MWJoRPw8eQD6tKTBzWN2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EKnyL5yNzB3UQXTrkLtsAg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t18Q5tb-XCFuP3kZ1JMkc1
          claim_id: c_qGvjGbAmTdtNdZZuggdsS6
          source_id: s_ocnBND2ZpeAEqtQToHFBV8
          stance: supports
          locator: 正统十年進士登科錄:一卷，第二甲第二十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_b2MWJoRPw8eQD6tKTBzWN2
        status: active
        display_name: 王信之
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_eco5AFtIH9U4VTypJMwNwL
        subject_person_id: p_EKnyL5yNzB3UQXTrkLtsAg
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_M4nYU9NggbFNXxJye51Ufx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DZnm8TZw13XRvaSTQrunQo
          claim_id: c_eco5AFtIH9U4VTypJMwNwL
          source_id: s_ytpZG6Jps8ECHU9-5u35_6
          stance: supports
          locator: 正统十年進士登科錄:一卷，第二甲第二十八名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ytpZG6Jps8ECHU9-5u35_6
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(王鎮妻)（CBDB 239112）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239112&o=json
            external_identifier: CBDB:239112
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_M4nYU9NggbFNXxJye51Ufx
        status: active
        display_name: 陳氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_241mXXo3WHnZ8cnNCtAxIs
        subject_person_id: p_P5KZVGkiLwMdc6i3jDHipC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_EKnyL5yNzB3UQXTrkLtsAg
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CIhHf8cKJLDXmV6WQV0ISw
          claim_id: c_241mXXo3WHnZ8cnNCtAxIs
          source_id: s_ocnBND2ZpeAEqtQToHFBV8
          stance: supports
          locator: 正统十年進士登科錄:一卷，第二甲第二十八名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_P5KZVGkiLwMdc6i3jDHipC
        status: active
        display_name: 王以清
        merged_into_person_id: null
    - claim:
        id: c_DcEPJ-ucP7m-IgRpLdFpAS
        subject_person_id: p_iajFy8vjSxmZFzUeQAyxVV
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_EKnyL5yNzB3UQXTrkLtsAg
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ebFv6UL7zNVv8OjgAKQ5IE
          claim_id: c_DcEPJ-ucP7m-IgRpLdFpAS
          source_id: s_ocnBND2ZpeAEqtQToHFBV8
          stance: supports
          locator: 正统十年進士登科錄:一卷，第二甲第二十八名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_iajFy8vjSxmZFzUeQAyxVV
        status: active
        display_name: 王財興
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王鎮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎮 | accepted |
| birth.date | 1407年 | accepted |
| bio.summary | 王鎮（生于1407年），明人物。明清進士進士，籍贯濟寧州，入仕進士。（中国历代人物传记资料库 CBDB 208004） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_b2MWJoRPw8eQD6tKTBzWN2 | 王信之 | accepted |
| spouses | p_M4nYU9NggbFNXxJye51Ufx | 陳氏 | accepted |
| ancestors | p_P5KZVGkiLwMdc6i3jDHipC | 王以清 | accepted |
| ancestors | p_iajFy8vjSxmZFzUeQAyxVV | 王財興 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(王鎮妻)（CBDB 239112）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239112&o=json)
- [中国历代人物传记资料库：王鎮（CBDB 208004）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208004&o=json)
