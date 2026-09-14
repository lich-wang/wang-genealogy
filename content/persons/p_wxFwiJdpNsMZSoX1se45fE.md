---
schema: wang-person/v1
id: p_wxFwiJdpNsMZSoX1se45fE
status: active
merged_into: null
display_name: 王福
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NBFtbiBnqPK4MRNvnNYNf4
        subject_person_id: p_wxFwiJdpNsMZSoX1se45fE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qrzFHkskFwW4KPtjC118J1
          claim_id: c_NBFtbiBnqPK4MRNvnNYNf4
          source_id: s_UZ6rZAjZ44sy7DFAoVNJRE
          stance: supports
          locator: CBDB:269703
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（269703）
          source: &a1
            id: s_UZ6rZAjZ44sy7DFAoVNJRE
            source_type: api_record
            title: 中国历代人物传记资料库：王福（CBDB 269703）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269703&o=json
            external_identifier: CBDB:269703
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.818Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eT4uhhdFAMat3j9T1jRrJw
        subject_person_id: p_wxFwiJdpNsMZSoX1se45fE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福，明人物。弘治九年進士，籍贯咸寧，曾任知縣。（中国历代人物传记资料库 CBDB 269703）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XwdL45vYWlc3uTBtZUGjaH
          claim_id: c_eT4uhhdFAMat3j9T1jRrJw
          source_id: s_UZ6rZAjZ44sy7DFAoVNJRE
          stance: supports
          locator: CBDB:269703
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_lfgvOMk-IvZ29LunoGRop1
        subject_person_id: p_wxFwiJdpNsMZSoX1se45fE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kET5KeLjgEQ8jqCSugxSSk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4ydZEblOGstOZK1weHpWbq
          claim_id: c_lfgvOMk-IvZ29LunoGRop1
          source_id: s_PK1WP6M7dNq3SM43V63SHW
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第一百九十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PK1WP6M7dNq3SM43V63SHW
            source_type: api_record
            title: 中国历代人物传记资料库：王綸（CBDB 201264）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201264&o=json
            external_identifier: CBDB:201264
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.668Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kET5KeLjgEQ8jqCSugxSSk
        status: active
        display_name: 王綸
        merged_into_person_id: null
    - claim:
        id: c_k1YTrXyPlO5ES5Xu2glTIc
        subject_person_id: p_wxFwiJdpNsMZSoX1se45fE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5jUJvtNkQ1fLV2wnjm1Gg4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X1EYWRQRaE9EXCw8AmFbvb
          claim_id: c_k1YTrXyPlO5ES5Xu2glTIc
          source_id: s_DESIhZ3NgLr6c9y1zgLBa_
          stance: supports
          locator: CBDB：兄弟 王綸（201264）之父／母 王福
          quotation: null
          interpretation_note: 由兄弟关系推断：王綎 与 王綸 为同胞（CBDB 记「兄」），王綸 之父／母即 王綎 之父／母。
          source:
            id: s_DESIhZ3NgLr6c9y1zgLBa_
            source_type: api_record
            title: 中国历代人物传记资料库：王綎（CBDB 269710）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269710&o=json
            external_identifier: CBDB:269710
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5jUJvtNkQ1fLV2wnjm1Gg4
        status: active
        display_name: 王綎
        merged_into_person_id: null
    - claim:
        id: c_Xk8oxyvBEXBTB2GbrzqacT
        subject_person_id: p_wxFwiJdpNsMZSoX1se45fE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TwBXLD75rmtdk6GedpWfg3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S-EuQ774njltuADXTETTJU
          claim_id: c_Xk8oxyvBEXBTB2GbrzqacT
          source_id: s_q_F3TLd-k0QVRpP1hWWGTk
          stance: supports
          locator: CBDB：兄弟 王綸（201264）之父／母 王福
          quotation: null
          interpretation_note: 由兄弟关系推断：王經 与 王綸 为同胞（CBDB 记「弟」），王綸 之父／母即 王經 之父／母。
          source:
            id: s_q_F3TLd-k0QVRpP1hWWGTk
            source_type: api_record
            title: 中国历代人物传记资料库：王經（CBDB 269708）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269708&o=json
            external_identifier: CBDB:269708
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TwBXLD75rmtdk6GedpWfg3
        status: active
        display_name: 王經
        merged_into_person_id: null
    - claim:
        id: c_AbS2YRuEhbr0l0hwVBcU0R
        subject_person_id: p_wxFwiJdpNsMZSoX1se45fE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bbY6BksPxzNen3V4KcsgPd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S-Yo0CqjQ1k7guFWvqlpa2
          claim_id: c_AbS2YRuEhbr0l0hwVBcU0R
          source_id: s_HZoh-LsbaE8PtT5yd4cdet
          stance: supports
          locator: CBDB：兄弟 王綸（201264）之父／母 王福
          quotation: null
          interpretation_note: 由兄弟关系推断：王縉 与 王綸 为同胞（CBDB 记「兄」），王綸 之父／母即 王縉 之父／母。
          source:
            id: s_HZoh-LsbaE8PtT5yd4cdet
            source_type: api_record
            title: 中国历代人物传记资料库：王縉（CBDB 269709）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269709&o=json
            external_identifier: CBDB:269709
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bbY6BksPxzNen3V4KcsgPd
        status: active
        display_name: 王縉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王福

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王福 | accepted |
| bio.summary | 王福，明人物。弘治九年進士，籍贯咸寧，曾任知縣。（中国历代人物传记资料库 CBDB 269703） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_kET5KeLjgEQ8jqCSugxSSk | 王綸 | accepted |
| children | p_5jUJvtNkQ1fLV2wnjm1Gg4 | 王綎 | accepted |
| children | p_TwBXLD75rmtdk6GedpWfg3 | 王經 | accepted |
| children | p_bbY6BksPxzNen3V4KcsgPd | 王縉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王福（CBDB 269703）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269703&o=json)
- [中国历代人物传记资料库：王縉（CBDB 269709）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269709&o=json)
- [中国历代人物传记资料库：王經（CBDB 269708）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269708&o=json)
- [中国历代人物传记资料库：王綸（CBDB 201264）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201264&o=json)
- [中国历代人物传记资料库：王綎（CBDB 269710）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269710&o=json)
