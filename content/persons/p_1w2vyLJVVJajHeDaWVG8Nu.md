---
schema: wang-person/v1
id: p_1w2vyLJVVJajHeDaWVG8Nu
status: active
merged_into: null
display_name: 王之臣
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KysPvGrbG73mJ8qgyna4yz
        subject_person_id: p_1w2vyLJVVJajHeDaWVG8Nu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FLnBD9BSy4t1pthLbSaEoH
          claim_id: c_KysPvGrbG73mJ8qgyna4yz
          source_id: s_5CpgTmQ25hsyBcSqVn7Epz
          stance: supports
          locator: CBDB:203483
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203483）
          source: &a1
            id: s_5CpgTmQ25hsyBcSqVn7Epz
            source_type: api_record
            title: 中国历代人物传记资料库：王之臣（CBDB 203483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203483&o=json
            external_identifier: CBDB:203483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.789Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_hkPEMKKqdUCBocrygLZsz8
        subject_person_id: p_1w2vyLJVVJajHeDaWVG8Nu
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1510年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KDaG5Uk2XMJY1ACs8oD39w
          claim_id: c_hkPEMKKqdUCBocrygLZsz8
          source_id: s_5CpgTmQ25hsyBcSqVn7Epz
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
        id: c_Ag48doZCGrcqnj26FGW89T
        subject_person_id: p_1w2vyLJVVJajHeDaWVG8Nu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之臣（生于1510年），明人物。明清進士進士，籍贯歙縣，入仕進士。（中国历代人物传记资料库 CBDB 203483）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ekelC1GmG4bxAW6J-xshTI
          claim_id: c_Ag48doZCGrcqnj26FGW89T
          source_id: s_5CpgTmQ25hsyBcSqVn7Epz
          stance: supports
          locator: CBDB:203483
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_OjBMsPjXBIsu8pJPOSnk_x
        subject_person_id: p_Wu57BG14u9G1YdRM7UC1bb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1w2vyLJVVJajHeDaWVG8Nu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lypBeqNDQKTik3Eccet7nw
          claim_id: c_OjBMsPjXBIsu8pJPOSnk_x
          source_id: s_5CpgTmQ25hsyBcSqVn7Epz
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第二甲第十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Wu57BG14u9G1YdRM7UC1bb
        status: active
        display_name: 王尚
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_LpEMZVO9ZZXXSy4wgWqR8l
        subject_person_id: p_1w2vyLJVVJajHeDaWVG8Nu
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_aGGPYhnbRF3c4BpnBXQ4GU
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sux-qjg88TNNo2dxdk_lXQ
          claim_id: c_LpEMZVO9ZZXXSy4wgWqR8l
          source_id: s_57XAAm0f6rMkmpIe4-T-4b
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第二甲第十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_57XAAm0f6rMkmpIe4-T-4b
            source_type: api_record
            title: 中国历代人物传记资料库：汪氏(王之臣妻)（CBDB 305352）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305352&o=json
            external_identifier: CBDB:305352
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aGGPYhnbRF3c4BpnBXQ4GU
        status: active
        display_name: 汪氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_D4kquOkFxs78jWz3_4d1GA
        subject_person_id: p_EAhcPdHUqn1cdvsTjdpctw
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1w2vyLJVVJajHeDaWVG8Nu
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Nv7LyC6n0bFmOTtEcNJFy8
          claim_id: c_D4kquOkFxs78jWz3_4d1GA
          source_id: s_5CpgTmQ25hsyBcSqVn7Epz
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第二甲第十一名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EAhcPdHUqn1cdvsTjdpctw
        status: active
        display_name: 王㬇
        merged_into_person_id: null
    - claim:
        id: c_JuxHi3aye3Z0ryUhRD2Zwg
        subject_person_id: p_n6B6dxMwRuYLUcZPJP3tCB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1w2vyLJVVJajHeDaWVG8Nu
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1rpknmpUYqBTyT-H7lCJ84
          claim_id: c_JuxHi3aye3Z0ryUhRD2Zwg
          source_id: s_5CpgTmQ25hsyBcSqVn7Epz
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第二甲第十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_n6B6dxMwRuYLUcZPJP3tCB
        status: active
        display_name: 王福宗
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王之臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之臣 | accepted |
| birth.date | 1510年 | accepted |
| bio.summary | 王之臣（生于1510年），明人物。明清進士進士，籍贯歙縣，入仕進士。（中国历代人物传记资料库 CBDB 203483） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Wu57BG14u9G1YdRM7UC1bb | 王尚 | accepted |
| spouses | p_aGGPYhnbRF3c4BpnBXQ4GU | 汪氏 | accepted |
| ancestors | p_EAhcPdHUqn1cdvsTjdpctw | 王㬇 | accepted |
| ancestors | p_n6B6dxMwRuYLUcZPJP3tCB | 王福宗 | accepted |

## 外部来源

- [中国历代人物传记资料库：汪氏(王之臣妻)（CBDB 305352）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305352&o=json)
- [中国历代人物传记资料库：王之臣（CBDB 203483）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203483&o=json)
