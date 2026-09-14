---
schema: wang-person/v1
id: p_3VWyJNWMm17kXtvGcMVL5b
status: active
merged_into: null
display_name: 王密
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7yFfs27n1zyqLiKkZya8tN
        subject_person_id: p_3VWyJNWMm17kXtvGcMVL5b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王密
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tuHsD6ZRJiUjRSMpJcp175
          claim_id: c_7yFfs27n1zyqLiKkZya8tN
          source_id: s_LMA8xHJ4EXr524gv8VeY3b
          stance: supports
          locator: CBDB:202150
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202150）
          source: &a1
            id: s_LMA8xHJ4EXr524gv8VeY3b
            source_type: api_record
            title: 中国历代人物传记资料库：王密（CBDB 202150）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202150&o=json
            external_identifier: CBDB:202150
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.725Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_seXn9fs3en62sR4fT9gscA
        subject_person_id: p_3VWyJNWMm17kXtvGcMVL5b
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1487年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7nNddcunk1t39oen82pHAx
          claim_id: c_seXn9fs3en62sR4fT9gscA
          source_id: s_LMA8xHJ4EXr524gv8VeY3b
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
        id: c_WB2DhgordtABnfqzivTx2T
        subject_person_id: p_3VWyJNWMm17kXtvGcMVL5b
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王密（生于1487年），明人物。明清進士進士，籍贯唐山，入仕進士。（中国历代人物传记资料库 CBDB 202150）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6PA0tLsvGJ5kixHOS9Qv7b
          claim_id: c_WB2DhgordtABnfqzivTx2T
          source_id: s_LMA8xHJ4EXr524gv8VeY3b
          stance: supports
          locator: CBDB:202150
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__aZxU1BR7Wf8_Cq1xfI2uT
        subject_person_id: p_CN2jDLgCox9JFiLJPyx2Za
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3VWyJNWMm17kXtvGcMVL5b
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nqDcwomowXtBuBN0weBMsm
          claim_id: c__aZxU1BR7Wf8_Cq1xfI2uT
          source_id: s_LMA8xHJ4EXr524gv8VeY3b
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CN2jDLgCox9JFiLJPyx2Za
        status: active
        display_name: 王鎮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_D4os8OEFs1MM4h-uCW2n1Q
        subject_person_id: p_3VWyJNWMm17kXtvGcMVL5b
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_w41GC7aSQabnLka6UZ1VWz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6wtqERMQOyNaMfZKSwDPTs
          claim_id: c_D4os8OEFs1MM4h-uCW2n1Q
          source_id: s_uhWfe--aAJzZfnWureqceo
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第十五名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_uhWfe--aAJzZfnWureqceo
            source_type: api_record
            title: 中国历代人物传记资料库：趙氏(王密妻)（CBDB 284298）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284298&o=json
            external_identifier: CBDB:284298
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_w41GC7aSQabnLka6UZ1VWz
        status: active
        display_name: 趙氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_eloTyXsJ334GLvJGici2Zb
        subject_person_id: p_DSxYDaaTU5JEJPeq3GSeg5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3VWyJNWMm17kXtvGcMVL5b
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Yxgqh426PaAQx3BrO8SpVn
          claim_id: c_eloTyXsJ334GLvJGici2Zb
          source_id: s_LMA8xHJ4EXr524gv8VeY3b
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第十五名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DSxYDaaTU5JEJPeq3GSeg5
        status: active
        display_name: 王聚
        merged_into_person_id: null
    - claim:
        id: c_tPXt64fdfbh0v-tmeostct
        subject_person_id: p_r4MTRV1bEZ9nUwXyZp7sDF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3VWyJNWMm17kXtvGcMVL5b
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KJYPaB-aHM_S3ycnz2CZXm
          claim_id: c_tPXt64fdfbh0v-tmeostct
          source_id: s_LMA8xHJ4EXr524gv8VeY3b
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第十五名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_r4MTRV1bEZ9nUwXyZp7sDF
        status: active
        display_name: 王溫
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_gvAOMl6prC4qQL9n2ZXa9n
        subject_person_id: p_3VWyJNWMm17kXtvGcMVL5b
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_5WPzkVA5sDWY8eV3w56KtW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vFDNNDuFMMK3TyS0c6ZsLR
          claim_id: c_gvAOMl6prC4qQL9n2ZXa9n
          source_id: s_4ByhTxTB1iATISY6YxXl9W
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202150 王密）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_4ByhTxTB1iATISY6YxXl9W
            source_type: api_record
            title: 中国历代人物传记资料库：王玳（CBDB 284308）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284308&o=json
            external_identifier: CBDB:284308
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5WPzkVA5sDWY8eV3w56KtW
        status: active
        display_name: 王玳
        merged_into_person_id: null
    - claim:
        id: c_V44l450WO4EgcXw9oV5iyH
        subject_person_id: p_3VWyJNWMm17kXtvGcMVL5b
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_5vJLAzNDx7JY5MNSu628Uh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Isl3IeTKHiPvnwyg1ftC0w
          claim_id: c_V44l450WO4EgcXw9oV5iyH
          source_id: s_yx1RFaviIwL3uIjTd8Fbn3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202150 王密）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_yx1RFaviIwL3uIjTd8Fbn3
            source_type: api_record
            title: 中国历代人物传记资料库：王瑁（CBDB 284309）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284309&o=json
            external_identifier: CBDB:284309
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5vJLAzNDx7JY5MNSu628Uh
        status: active
        display_name: 王瑁
        merged_into_person_id: null
    - claim:
        id: c_Qxb9cM_uLnrO1uXW4a73NN
        subject_person_id: p_3VWyJNWMm17kXtvGcMVL5b
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_86NzEXq2mafv9E7Hd1xdpn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__KzC0XOfbZV-peP0Csd3cs
          claim_id: c_Qxb9cM_uLnrO1uXW4a73NN
          source_id: s_E3pznG4p8ospBVsx_n5--B
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202150 王密）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_E3pznG4p8ospBVsx_n5--B
            source_type: api_record
            title: 中国历代人物传记资料库：王玕（CBDB 284307）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284307&o=json
            external_identifier: CBDB:284307
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_86NzEXq2mafv9E7Hd1xdpn
        status: active
        display_name: 王玕
        merged_into_person_id: null
    - claim:
        id: c_pdW12kc7gJgYBEbBzCtmkU
        subject_person_id: p_3VWyJNWMm17kXtvGcMVL5b
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_9e32nes6FjvsBfwyF5Xit5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Yych2cu7H5b7Mk8SM-riiK
          claim_id: c_pdW12kc7gJgYBEbBzCtmkU
          source_id: s_nNWCElBLwGPmtHy7JeIqXP
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202150 王密）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_nNWCElBLwGPmtHy7JeIqXP
            source_type: api_record
            title: 中国历代人物传记资料库：王璿（CBDB 284300）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284300&o=json
            external_identifier: CBDB:284300
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9e32nes6FjvsBfwyF5Xit5
        status: active
        display_name: 王璿
        merged_into_person_id: null
    - claim:
        id: c_gX2TSCMCIHW8mL5Iv6lcKI
        subject_person_id: p_3VWyJNWMm17kXtvGcMVL5b
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_DZogi6J9BCFb91BenUosQ4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iDv5vqd6tGebL4rNDdz7wB
          claim_id: c_gX2TSCMCIHW8mL5Iv6lcKI
          source_id: s_hjqTNI5SqeUsfpYq1NVnuy
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202150 王密）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hjqTNI5SqeUsfpYq1NVnuy
            source_type: api_record
            title: 中国历代人物传记资料库：王璣（CBDB 284301）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284301&o=json
            external_identifier: CBDB:284301
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DZogi6J9BCFb91BenUosQ4
        status: active
        display_name: 王璣
        merged_into_person_id: null
    - claim:
        id: c_fqg1SXTEnPiTJlmkSnIX_4
        subject_person_id: p_3VWyJNWMm17kXtvGcMVL5b
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gowA3oBCakD6RUbFUVQs5N
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sFe_KffJqCkiVkbZNJ19Ke
          claim_id: c_fqg1SXTEnPiTJlmkSnIX_4
          source_id: s_W0ky_mgl51OBuQVqvGuiAy
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202150 王密）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_W0ky_mgl51OBuQVqvGuiAy
            source_type: api_record
            title: 中国历代人物传记资料库：王珢（CBDB 284306）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284306&o=json
            external_identifier: CBDB:284306
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gowA3oBCakD6RUbFUVQs5N
        status: active
        display_name: 王珢
        merged_into_person_id: null
---

# 王密

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王密 | accepted |
| birth.date | 1487年 | accepted |
| bio.summary | 王密（生于1487年），明人物。明清進士進士，籍贯唐山，入仕進士。（中国历代人物传记资料库 CBDB 202150） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CN2jDLgCox9JFiLJPyx2Za | 王鎮 | accepted |
| spouses | p_w41GC7aSQabnLka6UZ1VWz | 趙氏 | accepted |
| ancestors | p_DSxYDaaTU5JEJPeq3GSeg5 | 王聚 | accepted |
| ancestors | p_r4MTRV1bEZ9nUwXyZp7sDF | 王溫 | accepted |
| other | p_5WPzkVA5sDWY8eV3w56KtW | 王玳 | accepted |
| other | p_5vJLAzNDx7JY5MNSu628Uh | 王瑁 | accepted |
| other | p_86NzEXq2mafv9E7Hd1xdpn | 王玕 | accepted |
| other | p_9e32nes6FjvsBfwyF5Xit5 | 王璿 | accepted |
| other | p_DZogi6J9BCFb91BenUosQ4 | 王璣 | accepted |
| other | p_gowA3oBCakD6RUbFUVQs5N | 王珢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王玳（CBDB 284308）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284308&o=json)
- [中国历代人物传记资料库：王玕（CBDB 284307）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284307&o=json)
- [中国历代人物传记资料库：王璣（CBDB 284301）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284301&o=json)
- [中国历代人物传记资料库：王瑁（CBDB 284309）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284309&o=json)
- [中国历代人物传记资料库：王密（CBDB 202150）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202150&o=json)
- [中国历代人物传记资料库：王璿（CBDB 284300）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284300&o=json)
- [中国历代人物传记资料库：王珢（CBDB 284306）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284306&o=json)
- [中国历代人物传记资料库：趙氏(王密妻)（CBDB 284298）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284298&o=json)
