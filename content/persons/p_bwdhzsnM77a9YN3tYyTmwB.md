---
schema: wang-person/v1
id: p_bwdhzsnM77a9YN3tYyTmwB
status: active
merged_into: null
display_name: 王鴻儒
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qQ5yrytzLVty4ZRRnSDt8Z
        subject_person_id: p_bwdhzsnM77a9YN3tYyTmwB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鴻儒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jP5HxsbhjGgMy66k1jvcAJ
          claim_id: c_qQ5yrytzLVty4ZRRnSDt8Z
          source_id: s_D1Q1PMjTF3hG8x2zM1xYbq
          stance: supports
          locator: CBDB:33864
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（33864）
          source: &a1
            id: s_D1Q1PMjTF3hG8x2zM1xYbq
            source_type: api_record
            title: 中国历代人物传记资料库：王鴻儒（CBDB 33864）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33864&o=json
            external_identifier: CBDB:33864
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.072Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_YcPv4w6w8GovVQujDwnuHM
        subject_person_id: p_bwdhzsnM77a9YN3tYyTmwB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1519年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zoz9i4VxupnRBZemEycsix
          claim_id: c_YcPv4w6w8GovVQujDwnuHM
          source_id: s_D1Q1PMjTF3hG8x2zM1xYbq
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
        id: c_Gdka4z8dZgPiEgFML78zoA
        subject_person_id: p_bwdhzsnM77a9YN3tYyTmwB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鴻儒（卒于1519年），明人物。明清進士進士，籍贯南陽，身份为書法家、思想家，入仕進士。（中国历代人物传记资料库 CBDB 33864）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9lNZCdnExss4jh4dPE2m1Z
          claim_id: c_Gdka4z8dZgPiEgFML78zoA
          source_id: s_D1Q1PMjTF3hG8x2zM1xYbq
          stance: supports
          locator: CBDB:33864
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ypLW9KDqu6wNxHmZmLHOmV
        subject_person_id: p_PAQnJKUX1HHCzAwrFTb5md
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bwdhzsnM77a9YN3tYyTmwB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ExDOZmv_BUSxOixtDDA-3_
          claim_id: c_ypLW9KDqu6wNxHmZmLHOmV
          source_id: s_D1Q1PMjTF3hG8x2zM1xYbq
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第二甲第八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PAQnJKUX1HHCzAwrFTb5md
        status: active
        display_name: 王本
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_PdzEMRh3SwZ3hBEKAOaR70
        subject_person_id: p_bwdhzsnM77a9YN3tYyTmwB
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_WdSei9h8Pyy5rewkZCDsYk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cBCoXkRoXHjxxOXrv7ywrU
          claim_id: c_PdzEMRh3SwZ3hBEKAOaR70
          source_id: s_D1Q1PMjTF3hG8x2zM1xYbq
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第二甲第八名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WdSei9h8Pyy5rewkZCDsYk
        status: active
        display_name: 吴氏
        merged_into_person_id: null
    - claim:
        id: c_D6vGQaAuu0Mmp5ch-FI5-D
        subject_person_id: p_WdSei9h8Pyy5rewkZCDsYk
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_bwdhzsnM77a9YN3tYyTmwB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EmnzP0dhwUAoLu5ZudD2Of
          claim_id: c_D6vGQaAuu0Mmp5ch-FI5-D
          source_id: s_fqUNTVGzHys351QW9qwD5C
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第二甲第八名：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fqUNTVGzHys351QW9qwD5C
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：吳氏（257537）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257537&o=json
            external_identifier: CBDB:257537
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:05.942Z
            metadata_json: null
      object_person:
        id: p_WdSei9h8Pyy5rewkZCDsYk
        status: active
        display_name: 吴氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c__v1UHQsTUsVZZ_DJjxDwZ4
        subject_person_id: p_CssBwdEzPxaEJMK9H91FMQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_bwdhzsnM77a9YN3tYyTmwB
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iMb3PAhNXWt7n9nr85LA0S
          claim_id: c__v1UHQsTUsVZZ_DJjxDwZ4
          source_id: s_D1Q1PMjTF3hG8x2zM1xYbq
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第二甲第八名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CssBwdEzPxaEJMK9H91FMQ
        status: active
        display_name: 王云
        merged_into_person_id: null
    - claim:
        id: c_s2gdO8jr4QiSf3GbblIusI
        subject_person_id: p_Ns4Cdmr9SZRQforztCwkrA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_bwdhzsnM77a9YN3tYyTmwB
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cnmwS6h4FsTBioLkwiike-
          claim_id: c_s2gdO8jr4QiSf3GbblIusI
          source_id: s_D1Q1PMjTF3hG8x2zM1xYbq
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第二甲第八名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Ns4Cdmr9SZRQforztCwkrA
        status: active
        display_name: 王成
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_77O6_rAwxw1ExQRXIAySne
        subject_person_id: p_bwdhzsnM77a9YN3tYyTmwB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_iRoPCMQGG7T8QWQEfbMdBx
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g3AM8oTqnx5O1lXf3tjcAC
          claim_id: c_77O6_rAwxw1ExQRXIAySne
          source_id: s_D1Q1PMjTF3hG8x2zM1xYbq
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第二甲第四十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_iRoPCMQGG7T8QWQEfbMdBx
        status: active
        display_name: 王汝鲁
        merged_into_person_id: null
  other: []
---

# 王鴻儒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鴻儒 | accepted |
| death.date | 1519年 | accepted |
| bio.summary | 王鴻儒（卒于1519年），明人物。明清進士進士，籍贯南陽，身份为書法家、思想家，入仕進士。（中国历代人物传记资料库 CBDB 33864） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PAQnJKUX1HHCzAwrFTb5md | 王本 | accepted |
| spouses | p_WdSei9h8Pyy5rewkZCDsYk | 吴氏 | accepted |
| spouses | p_WdSei9h8Pyy5rewkZCDsYk | 吴氏 | accepted |
| ancestors | p_CssBwdEzPxaEJMK9H91FMQ | 王云 | accepted |
| ancestors | p_Ns4Cdmr9SZRQforztCwkrA | 王成 | accepted |
| descendants | p_iRoPCMQGG7T8QWQEfbMdBx | 王汝鲁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鴻儒（CBDB 33864）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33864&o=json)
- [CBDB 中国历代人物传记资料库：吳氏（257537）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257537&o=json)
