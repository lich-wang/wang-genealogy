---
schema: wang-person/v1
id: p_GPJ5PvBXjvhgLRDQbw5wn2
status: active
merged_into: null
display_name: 王栻
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nGpdGf8MEYH5N5gqiaHwhp
        subject_person_id: p_GPJ5PvBXjvhgLRDQbw5wn2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王栻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4EyGbcUmzzH2qf1PjgEc8y
          claim_id: c_nGpdGf8MEYH5N5gqiaHwhp
          source_id: s_NLo5mZpLgs4MVDJkKMjgjs
          stance: supports
          locator: CBDB:201553
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201553）
          source: &a1
            id: s_NLo5mZpLgs4MVDJkKMjgjs
            source_type: api_record
            title: 中国历代人物传记资料库：王栻（CBDB 201553）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201553&o=json
            external_identifier: CBDB:201553
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.685Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_kf3dQCqr4eeAdQaTzTUpNf
        subject_person_id: p_GPJ5PvBXjvhgLRDQbw5wn2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1469年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Woytqqdw5h2xcHSE5DfJxC
          claim_id: c_kf3dQCqr4eeAdQaTzTUpNf
          source_id: s_NLo5mZpLgs4MVDJkKMjgjs
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
        id: c_7Gq99VeosBg8Y9xZyJrhpD
        subject_person_id: p_GPJ5PvBXjvhgLRDQbw5wn2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王栻（生于1469年），明人物。明清進士進士，籍贯金壇，入仕進士。（中国历代人物传记资料库 CBDB 201553）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NSWxF7KdayhV57hdhrRD_-
          claim_id: c_7Gq99VeosBg8Y9xZyJrhpD
          source_id: s_NLo5mZpLgs4MVDJkKMjgjs
          stance: supports
          locator: CBDB:201553
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_n6vL9tcT-rNspw5dCHaRw-
        subject_person_id: p_VcYjKdyzjQFgG3FRqoyThA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GPJ5PvBXjvhgLRDQbw5wn2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NKYKLo9E1sn5NSncgTkQYb
          claim_id: c_n6vL9tcT-rNspw5dCHaRw-
          source_id: s_NLo5mZpLgs4MVDJkKMjgjs
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第五十九名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_VcYjKdyzjQFgG3FRqoyThA
        status: active
        display_name: 王完
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_k8n39VbT32JIjP0plBV1eq
        subject_person_id: p_GPJ5PvBXjvhgLRDQbw5wn2
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_D3jBdQQz5g9KZVHFuJisBk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xmprNgOIQ09j2Mb6WFYtm-
          claim_id: c_k8n39VbT32JIjP0plBV1eq
          source_id: s_HMIUbj1KjqFbhCY-k1jnSO
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第五十九名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HMIUbj1KjqFbhCY-k1jnSO
            source_type: api_record
            title: 中国历代人物传记资料库：楊氏(王栻妻)（CBDB 274249）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274249&o=json
            external_identifier: CBDB:274249
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_D3jBdQQz5g9KZVHFuJisBk
        status: active
        display_name: 楊氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_XNMBpgALXP8_DUGMzFY0Sb
        subject_person_id: p_9rXTbYHYhmBAvbpZaHj81G
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GPJ5PvBXjvhgLRDQbw5wn2
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EuMvqZQayqZqnoBR7c_EfL
          claim_id: c_XNMBpgALXP8_DUGMzFY0Sb
          source_id: s_NLo5mZpLgs4MVDJkKMjgjs
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第五十九名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9rXTbYHYhmBAvbpZaHj81G
        status: active
        display_name: 王馭
        merged_into_person_id: null
    - claim:
        id: c_I4YMU3rfOGTlDOoKvv3p0v
        subject_person_id: p_WtczkhkRScd1UzDxUThN9H
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GPJ5PvBXjvhgLRDQbw5wn2
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jILdtV-egczf-KnrEmjYQU
          claim_id: c_I4YMU3rfOGTlDOoKvv3p0v
          source_id: s_NLo5mZpLgs4MVDJkKMjgjs
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第五十九名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WtczkhkRScd1UzDxUThN9H
        status: active
        display_name: 王秉
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王栻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王栻 | accepted |
| birth.date | 1469年 | accepted |
| bio.summary | 王栻（生于1469年），明人物。明清進士進士，籍贯金壇，入仕進士。（中国历代人物传记资料库 CBDB 201553） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VcYjKdyzjQFgG3FRqoyThA | 王完 | accepted |
| spouses | p_D3jBdQQz5g9KZVHFuJisBk | 楊氏 | accepted |
| ancestors | p_9rXTbYHYhmBAvbpZaHj81G | 王馭 | accepted |
| ancestors | p_WtczkhkRScd1UzDxUThN9H | 王秉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王栻（CBDB 201553）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201553&o=json)
- [中国历代人物传记资料库：楊氏(王栻妻)（CBDB 274249）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274249&o=json)
