---
schema: wang-person/v1
id: p_8fLyT7ZEVM5q6B59fHgKMb
status: active
merged_into: null
display_name: 王鎬
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8KP79y6sRsVECSWrLhjUDa
        subject_person_id: p_8fLyT7ZEVM5q6B59fHgKMb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dTqJnDEjQnReHg6pHH7Hqt
          claim_id: c_8KP79y6sRsVECSWrLhjUDa
          source_id: s_zQhfYZPNcGJvYKAzCCCRiq
          stance: supports
          locator: CBDB:126866
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126866）
          source: &a1
            id: s_zQhfYZPNcGJvYKAzCCCRiq
            source_type: api_record
            title: 中国历代人物传记资料库：王鎬（CBDB 126866）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126866&o=json
            external_identifier: CBDB:126866
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.270Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_a18HN8D5mXH6szPyCLohr2
        subject_person_id: p_8fLyT7ZEVM5q6B59fHgKMb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6WAASF9JkJpQWxbQRVs6LK
          claim_id: c_a18HN8D5mXH6szPyCLohr2
          source_id: s_zQhfYZPNcGJvYKAzCCCRiq
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
        id: c_fNrU73mImhYyMxqxoO9bBd
        subject_person_id: p_gGs45wBLrz1PrQ7nJg3Ni8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8fLyT7ZEVM5q6B59fHgKMb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1Kl4Ky_cPKQXecj3YfJY1U
          claim_id: c_fNrU73mImhYyMxqxoO9bBd
          source_id: s_zQhfYZPNcGJvYKAzCCCRiq
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第一百七十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gGs45wBLrz1PrQ7nJg3Ni8
        status: active
        display_name: 王璋
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_BBKLi0iOkivuXy2odx3elb
        subject_person_id: p_8fLyT7ZEVM5q6B59fHgKMb
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_fgG89fq4pFU8AiEJQ5s24P
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yzmS7-jvN45YaqMD9f20Bh
          claim_id: c_BBKLi0iOkivuXy2odx3elb
          source_id: s_1ekqbWw_onRm52cOn7TxtA
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第一百七十四名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1ekqbWw_onRm52cOn7TxtA
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(王鎬妻)（CBDB 290154）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290154&o=json
            external_identifier: CBDB:290154
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fgG89fq4pFU8AiEJQ5s24P
        status: active
        display_name: 陳氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_yBO9jNe3UVFX6nbztsqu02
        subject_person_id: p_wKtE8zuLqyCAcUgFGmKLDZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8fLyT7ZEVM5q6B59fHgKMb
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BWCZhJLAPGDTK_YGg3FKxh
          claim_id: c_yBO9jNe3UVFX6nbztsqu02
          source_id: s_zQhfYZPNcGJvYKAzCCCRiq
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第一百七十四名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wKtE8zuLqyCAcUgFGmKLDZ
        status: active
        display_name: 王貴
        merged_into_person_id: null
    - claim:
        id: c_t-CWTPMPiQduFeVkhwc5i_
        subject_person_id: p_LG1H4ZU953vvpEe2T5EbAA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8fLyT7ZEVM5q6B59fHgKMb
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__LebMCPWIL5ZBgM2SqUZJ4
          claim_id: c_t-CWTPMPiQduFeVkhwc5i_
          source_id: s_zQhfYZPNcGJvYKAzCCCRiq
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第一百七十四名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LG1H4ZU953vvpEe2T5EbAA
        status: active
        display_name: 王暹
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王鎬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎬 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gGs45wBLrz1PrQ7nJg3Ni8 | 王璋 | accepted |
| spouses | p_fgG89fq4pFU8AiEJQ5s24P | 陳氏 | accepted |
| ancestors | p_wKtE8zuLqyCAcUgFGmKLDZ | 王貴 | accepted |
| ancestors | p_LG1H4ZU953vvpEe2T5EbAA | 王暹 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(王鎬妻)（CBDB 290154）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290154&o=json)
- [中国历代人物传记资料库：王鎬（CBDB 126866）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126866&o=json)
