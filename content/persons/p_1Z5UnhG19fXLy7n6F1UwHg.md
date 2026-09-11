---
schema: wang-person/v1
id: p_1Z5UnhG19fXLy7n6F1UwHg
status: active
merged_into: null
display_name: 王納誨
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5JcVvdHpPKaM78Cph6cPcM
        subject_person_id: p_1Z5UnhG19fXLy7n6F1UwHg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王納誨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BW3e6WUCRDDV2E2cqq2Y5p
          claim_id: c_5JcVvdHpPKaM78Cph6cPcM
          source_id: s_Z5C1Z7dXiFUhSuKwZiKM9C
          stance: supports
          locator: CBDB:126660
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126660）
          source: &a1
            id: s_Z5C1Z7dXiFUhSuKwZiKM9C
            source_type: api_record
            title: 中国历代人物传记资料库：王納誨（CBDB 126660）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126660&o=json
            external_identifier: CBDB:126660
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.101Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bvK8XW7453D6J1XQq6D9HA
        subject_person_id: p_1Z5UnhG19fXLy7n6F1UwHg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王納誨，明人物。明清進士進士，籍贯長安，入仕進士，曾任州同知。（中国历代人物传记资料库 CBDB 126660）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WArZSh90KmmNG5ouXXXwW4
          claim_id: c_bvK8XW7453D6J1XQq6D9HA
          source_id: s_Z5C1Z7dXiFUhSuKwZiKM9C
          stance: supports
          locator: CBDB:126660
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_T3EeTEKYy_HAhQcCn8z1sM
        subject_person_id: p_Qgi5dcqDryNPsU26Qm66Ka
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1Z5UnhG19fXLy7n6F1UwHg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cUjPxhWSgEOsEYid70Cp3M
          claim_id: c_T3EeTEKYy_HAhQcCn8z1sM
          source_id: s_Z5C1Z7dXiFUhSuKwZiKM9C
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第四十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Qgi5dcqDryNPsU26Qm66Ka
        status: active
        display_name: 王琮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_N3ufDO6CYpv_Dor4bFbTSD
        subject_person_id: p_1Z5UnhG19fXLy7n6F1UwHg
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_s1PHoruNVpfL6dYWTgnMR8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QMLvO0G52Y2hefSZXrtBkD
          claim_id: c_N3ufDO6CYpv_Dor4bFbTSD
          source_id: s_Ek5eqSHGBqiajNc-Wt4o_m
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第四十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Ek5eqSHGBqiajNc-Wt4o_m
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王納誨妻)（CBDB 270240）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270240&o=json
            external_identifier: CBDB:270240
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_s1PHoruNVpfL6dYWTgnMR8
        status: active
        display_name: 張氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_3peR7UbAiTVYi1xU3ypp-c
        subject_person_id: p_F7Xf89xVagQzqZH86LPDkT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1Z5UnhG19fXLy7n6F1UwHg
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zaaQS8nevoJx8ScoakVYqd
          claim_id: c_3peR7UbAiTVYi1xU3ypp-c
          source_id: s_Z5C1Z7dXiFUhSuKwZiKM9C
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第四十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_F7Xf89xVagQzqZH86LPDkT
        status: active
        display_name: 王奉先
        merged_into_person_id: null
    - claim:
        id: c_jhEf0D-bnGNNmGjis1rpPz
        subject_person_id: p_W9geBzvuhL2GK1XqUmrkGC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1Z5UnhG19fXLy7n6F1UwHg
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fhUFZtosFYoZWntEyQF8_A
          claim_id: c_jhEf0D-bnGNNmGjis1rpPz
          source_id: s_Z5C1Z7dXiFUhSuKwZiKM9C
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第四十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_W9geBzvuhL2GK1XqUmrkGC
        status: active
        display_name: 王鐸
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王納誨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王納誨 | accepted |
| bio.summary | 王納誨，明人物。明清進士進士，籍贯長安，入仕進士，曾任州同知。（中国历代人物传记资料库 CBDB 126660） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Qgi5dcqDryNPsU26Qm66Ka | 王琮 | accepted |
| spouses | p_s1PHoruNVpfL6dYWTgnMR8 | 張氏 | accepted |
| ancestors | p_F7Xf89xVagQzqZH86LPDkT | 王奉先 | accepted |
| ancestors | p_W9geBzvuhL2GK1XqUmrkGC | 王鐸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王納誨（CBDB 126660）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126660&o=json)
- [中国历代人物传记资料库：張氏(王納誨妻)（CBDB 270240）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270240&o=json)
