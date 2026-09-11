---
schema: wang-person/v1
id: p_7tdhj3xqs6eFzthKS1AGvP
status: active
merged_into: null
display_name: 王璘
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gxczx72PGK1v2XJcFVeJKS
        subject_person_id: p_7tdhj3xqs6eFzthKS1AGvP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tDEw9pfJWDjyPQBUjaMVHv
          claim_id: c_gxczx72PGK1v2XJcFVeJKS
          source_id: s_eR9PHtQEPTH88NL4Vr3m5H
          stance: supports
          locator: CBDB:198460
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198460）
          source: &a1
            id: s_eR9PHtQEPTH88NL4Vr3m5H
            source_type: api_record
            title: 中国历代人物传记资料库：王璘（CBDB 198460）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198460&o=json
            external_identifier: CBDB:198460
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.495Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8seEX7eGRY9AEZ4xf3eAsm
        subject_person_id: p_7tdhj3xqs6eFzthKS1AGvP
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1430年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vZR1waiYeCW7JsBzve5qTw
          claim_id: c_8seEX7eGRY9AEZ4xf3eAsm
          source_id: s_eR9PHtQEPTH88NL4Vr3m5H
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
        id: c_3Ttw26U7kpfSxvLKxpEDSh
        subject_person_id: p_7tdhj3xqs6eFzthKS1AGvP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璘（生于1430年），明人物。明清進士進士，籍贯廬陵，入仕進士。（中国历代人物传记资料库 CBDB 198460）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_h9ozgsT-VQagfJm1FYzB4i
          claim_id: c_3Ttw26U7kpfSxvLKxpEDSh
          source_id: s_eR9PHtQEPTH88NL4Vr3m5H
          stance: supports
          locator: CBDB:198460
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3fAWzm0F_22INWk_aEkJVH
        subject_person_id: p_aR7p28hCpPSCDFnd7Y6HJL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7tdhj3xqs6eFzthKS1AGvP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lxwcSWZoj-XmkeqREpwNFY
          claim_id: c_3fAWzm0F_22INWk_aEkJVH
          source_id: s_eR9PHtQEPTH88NL4Vr3m5H
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第一百四十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_aR7p28hCpPSCDFnd7Y6HJL
        status: active
        display_name: 王秉惠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_C2_njNyJ7LPn5zUF9M0Rw0
        subject_person_id: p_7tdhj3xqs6eFzthKS1AGvP
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_xJ4hBEUpss6KqCP8nHiRXx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u0EhVqFa9RbEWmabuiW4DU
          claim_id: c_C2_njNyJ7LPn5zUF9M0Rw0
          source_id: s_5RIDrXX1BY4zmru2fOaqtR
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第一百四十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5RIDrXX1BY4zmru2fOaqtR
            source_type: api_record
            title: 中国历代人物传记资料库：錢氏(王璘妻)（CBDB 274797）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274797&o=json
            external_identifier: CBDB:274797
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_xJ4hBEUpss6KqCP8nHiRXx
        status: active
        display_name: 錢氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_e4uAVQ-CVv4wTaZO9RuTNU
        subject_person_id: p_x6G3XwPgqHG14t88dwo3Vd
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7tdhj3xqs6eFzthKS1AGvP
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DYx4UdK3cTN3rjU8_aPwep
          claim_id: c_e4uAVQ-CVv4wTaZO9RuTNU
          source_id: s_eR9PHtQEPTH88NL4Vr3m5H
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第一百四十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_x6G3XwPgqHG14t88dwo3Vd
        status: active
        display_name: 王文姜
        merged_into_person_id: null
    - claim:
        id: c_AX0PSc24WcNPmtRDeV_PK9
        subject_person_id: p_w6cWAgmTWF9XZ318UHjSya
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7tdhj3xqs6eFzthKS1AGvP
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Tkw-y2BNCjDSFZdHBsVjRM
          claim_id: c_AX0PSc24WcNPmtRDeV_PK9
          source_id: s_eR9PHtQEPTH88NL4Vr3m5H
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第一百四十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_w6cWAgmTWF9XZ318UHjSya
        status: active
        display_name: 王思與
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王璘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璘 | accepted |
| birth.date | 1430年 | accepted |
| bio.summary | 王璘（生于1430年），明人物。明清進士進士，籍贯廬陵，入仕進士。（中国历代人物传记资料库 CBDB 198460） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aR7p28hCpPSCDFnd7Y6HJL | 王秉惠 | accepted |
| spouses | p_xJ4hBEUpss6KqCP8nHiRXx | 錢氏 | accepted |
| ancestors | p_x6G3XwPgqHG14t88dwo3Vd | 王文姜 | accepted |
| ancestors | p_w6cWAgmTWF9XZ318UHjSya | 王思與 | accepted |

## 外部来源

- [中国历代人物传记资料库：錢氏(王璘妻)（CBDB 274797）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274797&o=json)
- [中国历代人物传记资料库：王璘（CBDB 198460）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198460&o=json)
