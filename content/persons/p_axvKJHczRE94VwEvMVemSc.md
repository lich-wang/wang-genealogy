---
schema: wang-person/v1
id: p_axvKJHczRE94VwEvMVemSc
status: active
merged_into: null
display_name: 王一言
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D8PaTfX82jfGKpDyxAF8Pe
        subject_person_id: p_axvKJHczRE94VwEvMVemSc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KZjFCZ8quFu4T1wyX9PrYs
          claim_id: c_D8PaTfX82jfGKpDyxAF8Pe
          source_id: s_ugxK1xzvCFSxHdB96HR2ap
          stance: supports
          locator: CBDB:203015
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203015）
          source: &a1
            id: s_ugxK1xzvCFSxHdB96HR2ap
            source_type: api_record
            title: 中国历代人物传记资料库：王一言（CBDB 203015）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203015&o=json
            external_identifier: CBDB:203015
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.772Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_wcEHm93zmgMyDier1equKt
        subject_person_id: p_axvKJHczRE94VwEvMVemSc
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1503年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kusCRQ1VbtFAoJTR37BhJ7
          claim_id: c_wcEHm93zmgMyDier1equKt
          source_id: s_ugxK1xzvCFSxHdB96HR2ap
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
        id: c_v2SDQa6KQQ29NUERphfUqH
        subject_person_id: p_axvKJHczRE94VwEvMVemSc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一言（生于1503年），明人物。嘉靖十四年進士，籍贯福清，入仕進士。（中国历代人物传记资料库 CBDB 203015）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oPr6r5oBuKXcGVHZjtwyM0
          claim_id: c_v2SDQa6KQQ29NUERphfUqH
          source_id: s_ugxK1xzvCFSxHdB96HR2ap
          stance: supports
          locator: CBDB:203015
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_PYmUeqQTC2te0wbkMEKz96
        subject_person_id: p_iMDGVDoU4FmPtvJuYa8xHG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_axvKJHczRE94VwEvMVemSc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2afIHad7ryqMKozwIQSCAa
          claim_id: c_PYmUeqQTC2te0wbkMEKz96
          source_id: s_ugxK1xzvCFSxHdB96HR2ap
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第二百一十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_iMDGVDoU4FmPtvJuYa8xHG
        status: active
        display_name: 王諭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_gquglzqH4m4bEvztzEIlI0
        subject_person_id: p_axvKJHczRE94VwEvMVemSc
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_cr3AKwoRHTZQoXUZr51BF7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CpQATELDMw5MPU8rf-S5xT
          claim_id: c_gquglzqH4m4bEvztzEIlI0
          source_id: s_XOmK-Jb6NFEOj5tcqIDUPg
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第二百一十二名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_XOmK-Jb6NFEOj5tcqIDUPg
            source_type: api_record
            title: 中国历代人物传记资料库：施氏(王一言妻)（CBDB 298422）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298422&o=json
            external_identifier: CBDB:298422
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cr3AKwoRHTZQoXUZr51BF7
        status: active
        display_name: 施氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_fJNscDcDeJp3QQFEjVJUGH
        subject_person_id: p_j5tPhm57yRfYMhoU5CNpTV
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_axvKJHczRE94VwEvMVemSc
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BCynZjnXNBb0MrtuxGfSwL
          claim_id: c_fJNscDcDeJp3QQFEjVJUGH
          source_id: s_ugxK1xzvCFSxHdB96HR2ap
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第二百一十二名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_j5tPhm57yRfYMhoU5CNpTV
        status: active
        display_name: 王佐
        merged_into_person_id: null
    - claim:
        id: c_WmUBevU1ekUkDSeMaIOIo1
        subject_person_id: p_KMVQG8ESKc2GYAkUFotQJh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_axvKJHczRE94VwEvMVemSc
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l9VOztmLmeGYMml4_CNr-H
          claim_id: c_WmUBevU1ekUkDSeMaIOIo1
          source_id: s_ugxK1xzvCFSxHdB96HR2ap
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第二百一十二名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_KMVQG8ESKc2GYAkUFotQJh
        status: active
        display_name: 王世雍
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_wUkR6fsPTKTlh6yqDAvDLw
        subject_person_id: p_7mHTDv44Rhrt8TAWbQCrPB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_axvKJHczRE94VwEvMVemSc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VyLXOyIAqmcGpo3O8M4THn
          claim_id: c_wUkR6fsPTKTlh6yqDAvDLw
          source_id: s_DbLaCoWaVcJmmvXFRljmH_
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203015 王一言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_DbLaCoWaVcJmmvXFRljmH_
            source_type: api_record
            title: 中国历代人物传记资料库：王一卿（CBDB 298428）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298428&o=json
            external_identifier: CBDB:298428
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7mHTDv44Rhrt8TAWbQCrPB
        status: active
        display_name: 王一卿
        merged_into_person_id: null
    - claim:
        id: c_C5ufo151uTVXryQmbojOKp
        subject_person_id: p_HmNYQYLNPST1KTGaUUv8oM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_axvKJHczRE94VwEvMVemSc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ctMuhCGj8AxFAs7rbmogS3
          claim_id: c_C5ufo151uTVXryQmbojOKp
          source_id: s_f0QGPoN4sF7BiVk9-47AzN
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203015 王一言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_f0QGPoN4sF7BiVk9-47AzN
            source_type: api_record
            title: 中国历代人物传记资料库：王一麟（CBDB 298429）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298429&o=json
            external_identifier: CBDB:298429
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HmNYQYLNPST1KTGaUUv8oM
        status: active
        display_name: 王一麟
        merged_into_person_id: null
    - claim:
        id: c_f84lJ0kmRmmpRErW08Znp4
        subject_person_id: p_W5C5henR9j5M8DcZUztEWA
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_axvKJHczRE94VwEvMVemSc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nnAcom7d_Lb046egC7jW8c
          claim_id: c_f84lJ0kmRmmpRErW08Znp4
          source_id: s_GgSwFo53LKzsde3_215-5U
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203015 王一言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GgSwFo53LKzsde3_215-5U
            source_type: api_record
            title: 中国历代人物传记资料库：王一麒（CBDB 298430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298430&o=json
            external_identifier: CBDB:298430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_W5C5henR9j5M8DcZUztEWA
        status: active
        display_name: 王一麒
        merged_into_person_id: null
    - claim:
        id: c_QjTP76VwKLfLjrG0I0urqc
        subject_person_id: p_Yn5ABuRW9QJNhz87KhQtFX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_axvKJHczRE94VwEvMVemSc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PM8GRSmUaMa3g-m4K88bo2
          claim_id: c_QjTP76VwKLfLjrG0I0urqc
          source_id: s_IhutC4VuxKuNo59S-SlYC7
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203015 王一言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_IhutC4VuxKuNo59S-SlYC7
            source_type: api_record
            title: 中国历代人物传记资料库：王一齊（CBDB 298425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298425&o=json
            external_identifier: CBDB:298425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Yn5ABuRW9QJNhz87KhQtFX
        status: active
        display_name: 王一齊
        merged_into_person_id: null
    - claim:
        id: c_rD-RQVKVdIP8133ruBs-1u
        subject_person_id: p_axvKJHczRE94VwEvMVemSc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_h94RYJsotCcXbyJGXE7U2C
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hZ5nbj6hYCRypZ6KGHjCrS
          claim_id: c_rD-RQVKVdIP8133ruBs-1u
          source_id: s_60Iug9oNp2eoh_rtFaaZ2u
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203015 王一言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_60Iug9oNp2eoh_rtFaaZ2u
            source_type: api_record
            title: 中国历代人物传记资料库：王一弼（CBDB 298426）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298426&o=json
            external_identifier: CBDB:298426
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_h94RYJsotCcXbyJGXE7U2C
        status: active
        display_name: 王一弼
        merged_into_person_id: null
    - claim:
        id: c_OlhJJXAsBmvfxmIlGtpbtv
        subject_person_id: p_axvKJHczRE94VwEvMVemSc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_t7hYP4ir43vJB9in2jAKht
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_00vjEQa8xk3HuLhcwqP9ew
          claim_id: c_OlhJJXAsBmvfxmIlGtpbtv
          source_id: s_hc1RE02H-jAXWuT9iUGFnb
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203015 王一言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hc1RE02H-jAXWuT9iUGFnb
            source_type: api_record
            title: 中国历代人物传记资料库：王一袞（CBDB 298423）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298423&o=json
            external_identifier: CBDB:298423
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_t7hYP4ir43vJB9in2jAKht
        status: active
        display_name: 王一袞
        merged_into_person_id: null
    - claim:
        id: c_reKEtRKs4wBu5NVbwg-PiB
        subject_person_id: p_axvKJHczRE94VwEvMVemSc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zaLZ7MeMFzW6L2M9Y63jvQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-I9eboPYhaVqQ8irLmX3Ic
          claim_id: c_reKEtRKs4wBu5NVbwg-PiB
          source_id: s_kwnqevomL2-vtTpnaZdClx
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203015 王一言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kwnqevomL2-vtTpnaZdClx
            source_type: api_record
            title: 中国历代人物传记资料库：王一臣（CBDB 298427）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298427&o=json
            external_identifier: CBDB:298427
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zaLZ7MeMFzW6L2M9Y63jvQ
        status: active
        display_name: 王一臣
        merged_into_person_id: null
---

# 王一言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一言 | accepted |
| birth.date | 1503年 | accepted |
| bio.summary | 王一言（生于1503年），明人物。嘉靖十四年進士，籍贯福清，入仕進士。（中国历代人物传记资料库 CBDB 203015） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iMDGVDoU4FmPtvJuYa8xHG | 王諭 | accepted |
| spouses | p_cr3AKwoRHTZQoXUZr51BF7 | 施氏 | accepted |
| ancestors | p_j5tPhm57yRfYMhoU5CNpTV | 王佐 | accepted |
| ancestors | p_KMVQG8ESKc2GYAkUFotQJh | 王世雍 | accepted |
| other | p_7mHTDv44Rhrt8TAWbQCrPB | 王一卿 | accepted |
| other | p_HmNYQYLNPST1KTGaUUv8oM | 王一麟 | accepted |
| other | p_W5C5henR9j5M8DcZUztEWA | 王一麒 | accepted |
| other | p_Yn5ABuRW9QJNhz87KhQtFX | 王一齊 | accepted |
| other | p_h94RYJsotCcXbyJGXE7U2C | 王一弼 | accepted |
| other | p_t7hYP4ir43vJB9in2jAKht | 王一袞 | accepted |
| other | p_zaLZ7MeMFzW6L2M9Y63jvQ | 王一臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：施氏(王一言妻)（CBDB 298422）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298422&o=json)
- [中国历代人物传记资料库：王一弼（CBDB 298426）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298426&o=json)
- [中国历代人物传记资料库：王一臣（CBDB 298427）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298427&o=json)
- [中国历代人物传记资料库：王一袞（CBDB 298423）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298423&o=json)
- [中国历代人物传记资料库：王一麟（CBDB 298429）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298429&o=json)
- [中国历代人物传记资料库：王一齊（CBDB 298425）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298425&o=json)
- [中国历代人物传记资料库：王一麒（CBDB 298430）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298430&o=json)
- [中国历代人物传记资料库：王一卿（CBDB 298428）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298428&o=json)
- [中国历代人物传记资料库：王一言（CBDB 203015）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203015&o=json)
