---
schema: wang-person/v1
id: p_mr7WL1H5XRA2PNx82Aovox
status: active
merged_into: null
display_name: 王結
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TwuqY413N5fQGdXFdsALAn
        subject_person_id: p_mr7WL1H5XRA2PNx82Aovox
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王結
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1ymL8RLfDkvq1ub6sJgryq
          claim_id: c_TwuqY413N5fQGdXFdsALAn
          source_id: s_Pnf3TH57yK75Bz5FGF69ej
          stance: supports
          locator: CBDB:35033
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35033）
          source: &a1
            id: s_Pnf3TH57yK75Bz5FGF69ej
            source_type: api_record
            title: 中国历代人物传记资料库：王結（CBDB 35033）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35033&o=json
            external_identifier: CBDB:35033
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.102Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_C5FpiQLNYWp1hmX1RTY7Jr
        subject_person_id: p_mr7WL1H5XRA2PNx82Aovox
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1275年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Mj34KHDRkjWxZmGXjbAboH
          claim_id: c_C5FpiQLNYWp1hmX1RTY7Jr
          source_id: s_Pnf3TH57yK75Bz5FGF69ej
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_2P8VqtKeXegXA8qWXJpD6G
        subject_person_id: p_mr7WL1H5XRA2PNx82Aovox
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1336年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CKLDQ8GsZrHGbxPA3oq4RT
          claim_id: c_2P8VqtKeXegXA8qWXJpD6G
          source_id: s_Pnf3TH57yK75Bz5FGF69ej
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LJeLBJCLdp9px5haQ12yHC
        subject_person_id: p_mr7WL1H5XRA2PNx82Aovox
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王結（1275年—1336年），元人物。籍贯定興，身份为以疾廢、良吏;循吏，入仕徵辟，曾任翰林國史院翰林侍讀學士、翰林國史院學士、集賢直學士。（中国历代人物传记资料库 CBDB 35033）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qGjpPjqZkBWbesMxEV2yNZ
          claim_id: c_LJeLBJCLdp9px5haQ12yHC
          source_id: s_Pnf3TH57yK75Bz5FGF69ej
          stance: supports
          locator: CBDB:35033
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_PD-3uNzNhayl89ukxVOf_k
        subject_person_id: p_mr7WL1H5XRA2PNx82Aovox
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NcM9vRrcGNJLSCVWWG31nG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qFCv8LQ0HJkE0HZun5WC0Q
          claim_id: c_PD-3uNzNhayl89ukxVOf_k
          source_id: s_aB1Vj2OIRUAZ5eOCCwGuB9
          stance: supports
          locator: CBDB 亲属：父（KinPerson 35033）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_aB1Vj2OIRUAZ5eOCCwGuB9
            source_type: api_record
            title: 中国历代人物传记资料库：王敏修（CBDB 35036）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35036&o=json
            external_identifier: CBDB:35036
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NcM9vRrcGNJLSCVWWG31nG
        status: active
        display_name: 王敏修
        merged_into_person_id: null
    - claim:
        id: c_1Jr61EWubhgRd8VY0awKee
        subject_person_id: p_mr7WL1H5XRA2PNx82Aovox
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_reF3cWSeWX27BAYKBT37Bc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_37-JCmQLJbCH96CN1jsEAN
          claim_id: c_1Jr61EWubhgRd8VY0awKee
          source_id: s_Kuw_un_Dom0i2tb9fhVP95
          stance: supports
          locator: CBDB 亲属：父（KinPerson 35033）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_Kuw_un_Dom0i2tb9fhVP95
            source_type: api_record
            title: 中国历代人物传记资料库：王敏存（CBDB 35037）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35037&o=json
            external_identifier: CBDB:35037
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_reF3cWSeWX27BAYKBT37Bc
        status: active
        display_name: 王敏存
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_LeID5pC2Pzqs8c5DywxsqY
        subject_person_id: p_mr7WL1H5XRA2PNx82Aovox
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_JMi8VHjJbhj4BHFXH5in71
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pdk77mWhvYZbKCKxiZOVpD
          claim_id: c_LeID5pC2Pzqs8c5DywxsqY
          source_id: s_ckZ3KrB5Naepd1jatZV39f
          stance: supports
          locator: CBDB 双向互证（妻子 阿魯渾氏(王結妻)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ckZ3KrB5Naepd1jatZV39f
            source_type: api_record
            title: 中国历代人物传记资料库：阿魯渾氏(王結妻)（CBDB 35035）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35035&o=json
            external_identifier: CBDB:35035
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JMi8VHjJbhj4BHFXH5in71
        status: active
        display_name: 阿魯渾氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_zPZIhyGPRF73UGJsiTL5As
        subject_person_id: p_s9YXFky7MVJEJad9VXg7Kr
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_mr7WL1H5XRA2PNx82Aovox
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y_joX8o53lEf0M4KDZcqhA
          claim_id: c_zPZIhyGPRF73UGJsiTL5As
          source_id: s_Pnf3TH57yK75Bz5FGF69ej
          stance: supports
          locator: CBDB 双向互证（祖父 王逖 ⇄ 孫 王結）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_s9YXFky7MVJEJad9VXg7Kr
        status: active
        display_name: 王逖
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王結

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王結 | accepted |
| birth.date | 1275年 | accepted |
| death.date | 1336年 | accepted |
| bio.summary | 王結（1275年—1336年），元人物。籍贯定興，身份为以疾廢、良吏;循吏，入仕徵辟，曾任翰林國史院翰林侍讀學士、翰林國史院學士、集賢直學士。（中国历代人物传记资料库 CBDB 35033） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_NcM9vRrcGNJLSCVWWG31nG | 王敏修 | accepted |
| children | p_reF3cWSeWX27BAYKBT37Bc | 王敏存 | accepted |
| spouses | p_JMi8VHjJbhj4BHFXH5in71 | 阿魯渾氏 | accepted |
| ancestors | p_s9YXFky7MVJEJad9VXg7Kr | 王逖 | accepted |

## 外部来源

- [中国历代人物传记资料库：阿魯渾氏(王結妻)（CBDB 35035）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35035&o=json)
- [中国历代人物传记资料库：王結（CBDB 35033）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35033&o=json)
- [中国历代人物传记资料库：王敏存（CBDB 35037）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35037&o=json)
- [中国历代人物传记资料库：王敏修（CBDB 35036）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35036&o=json)
