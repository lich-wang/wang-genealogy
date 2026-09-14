---
schema: wang-person/v1
id: p_5Nsm7LtaHH2TfQdw6zv4Pu
status: active
merged_into: null
display_name: 王崇
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SkhUb41ZArDDHdgMA9DTqp
        subject_person_id: p_5Nsm7LtaHH2TfQdw6zv4Pu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BeAwCpVEPcXU3bJLreHL19
          claim_id: c_SkhUb41ZArDDHdgMA9DTqp
          source_id: s_4P9sB4w6wzqeoekXVGxMGt
          stance: supports
          locator: CBDB:126684
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126684）
          source: &a1
            id: s_4P9sB4w6wzqeoekXVGxMGt
            source_type: api_record
            title: 中国历代人物传记资料库：王崇（CBDB 126684）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126684&o=json
            external_identifier: CBDB:126684
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.121Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L15YLPdmg3SqdVRscJpLks
        subject_person_id: p_5Nsm7LtaHH2TfQdw6zv4Pu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇，明人物。明清進士進士，籍贯永康，入仕進士。（中国历代人物传记资料库 CBDB 126684）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uezL-uZHLV2TM7E3ClkUuH
          claim_id: c_L15YLPdmg3SqdVRscJpLks
          source_id: s_4P9sB4w6wzqeoekXVGxMGt
          stance: supports
          locator: CBDB:126684
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_GvoUgtasBAqq5ucFfRHZUG
        subject_person_id: p_if8g1GSPCjBBvajQMp9fXi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5Nsm7LtaHH2TfQdw6zv4Pu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0x4TZlU8LqBkFBnIVedXPG
          claim_id: c_GvoUgtasBAqq5ucFfRHZUG
          source_id: s_4P9sB4w6wzqeoekXVGxMGt
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第一百五十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_if8g1GSPCjBBvajQMp9fXi
        status: active
        display_name: 王科
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_VPaW5eO4kkZmD3adesswE4
        subject_person_id: p_5Nsm7LtaHH2TfQdw6zv4Pu
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_NCJfksBiERwMd5SG8TQf95
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4N1fudhnP_EILF8SARc_N1
          claim_id: c_VPaW5eO4kkZmD3adesswE4
          source_id: s_zJ4gsMvz-ZYJx76KNOClP0
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第一百五十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zJ4gsMvz-ZYJx76KNOClP0
            source_type: api_record
            title: 中国历代人物传记资料库：謝氏(王崇妻)（CBDB 289994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=289994&o=json
            external_identifier: CBDB:289994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_NCJfksBiERwMd5SG8TQf95
        status: active
        display_name: 謝氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_GWWmy23zKV0ZZKEJgN49XV
        subject_person_id: p_etrEBHXDCpBn2WJ7Kccha8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5Nsm7LtaHH2TfQdw6zv4Pu
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8bpM8LNcemOXor-Xe-Ncef
          claim_id: c_GWWmy23zKV0ZZKEJgN49XV
          source_id: s_4P9sB4w6wzqeoekXVGxMGt
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第一百五十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_etrEBHXDCpBn2WJ7Kccha8
        status: active
        display_name: 王肇護
        merged_into_person_id: null
    - claim:
        id: c_lF2Y5d6ZyTEd4vQLNT4P-s
        subject_person_id: p_N1LKScv39vZEjJfiNsp7Wi
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5Nsm7LtaHH2TfQdw6zv4Pu
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g5MpmaobqA827sRsjGbMDz
          claim_id: c_lF2Y5d6ZyTEd4vQLNT4P-s
          source_id: s_4P9sB4w6wzqeoekXVGxMGt
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第一百五十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_N1LKScv39vZEjJfiNsp7Wi
        status: active
        display_name: 王福
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_MXcbJ6cUksPnZQtXp4xMIB
        subject_person_id: p_5Nsm7LtaHH2TfQdw6zv4Pu
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_CMJ9SLWBZZ4zyd6hQeiRos
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_shMN5qAX2mCz6kWpTmU-7P
          claim_id: c_MXcbJ6cUksPnZQtXp4xMIB
          source_id: s_8xXXuYKJvogWr4DQR7SN_O
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126684 王崇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8xXXuYKJvogWr4DQR7SN_O
            source_type: api_record
            title: 中国历代人物传记资料库：王洪（CBDB 289996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=289996&o=json
            external_identifier: CBDB:289996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CMJ9SLWBZZ4zyd6hQeiRos
        status: active
        display_name: 王洪
        merged_into_person_id: null
    - claim:
        id: c_81UDqV_nvT0oyzul-D4FAH
        subject_person_id: p_5Nsm7LtaHH2TfQdw6zv4Pu
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rbYXmX1uMRrafLoo6WS9MX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5N81UQbBttZUKHB_zR1Gcl
          claim_id: c_81UDqV_nvT0oyzul-D4FAH
          source_id: s_JKt5P3Cuby5BU0dBTAGOux
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126684 王崇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JKt5P3Cuby5BU0dBTAGOux
            source_type: api_record
            title: 中国历代人物传记资料库：王京（CBDB 289995）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=289995&o=json
            external_identifier: CBDB:289995
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rbYXmX1uMRrafLoo6WS9MX
        status: active
        display_name: 王京
        merged_into_person_id: null
---

# 王崇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇 | accepted |
| bio.summary | 王崇，明人物。明清進士進士，籍贯永康，入仕進士。（中国历代人物传记资料库 CBDB 126684） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_if8g1GSPCjBBvajQMp9fXi | 王科 | accepted |
| spouses | p_NCJfksBiERwMd5SG8TQf95 | 謝氏 | accepted |
| ancestors | p_etrEBHXDCpBn2WJ7Kccha8 | 王肇護 | accepted |
| ancestors | p_N1LKScv39vZEjJfiNsp7Wi | 王福 | accepted |
| other | p_CMJ9SLWBZZ4zyd6hQeiRos | 王洪 | accepted |
| other | p_rbYXmX1uMRrafLoo6WS9MX | 王京 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇（CBDB 126684）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126684&o=json)
- [中国历代人物传记资料库：王洪（CBDB 289996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=289996&o=json)
- [中国历代人物传记资料库：王京（CBDB 289995）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=289995&o=json)
- [中国历代人物传记资料库：謝氏(王崇妻)（CBDB 289994）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=289994&o=json)
