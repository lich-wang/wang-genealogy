---
schema: wang-person/v1
id: p_e8GwzBVysey3Kb4uNTABDK
status: active
merged_into: null
display_name: 王敬
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XNppWVM6Eiic1HrBstXfex
        subject_person_id: p_e8GwzBVysey3Kb4uNTABDK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zS55UE6D24KmehxNcP7h2N
          claim_id: c_XNppWVM6Eiic1HrBstXfex
          source_id: s_HwM5bMkoywC5wSHBTt5VnK
          stance: supports
          locator: CBDB:296945
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（296945）
          source: &a1
            id: s_HwM5bMkoywC5wSHBTt5VnK
            source_type: api_record
            title: 中国历代人物传记资料库：王敬（CBDB 296945）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296945&o=json
            external_identifier: CBDB:296945
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.536Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qJ7qfzQL7rBBap2A22eiuU
        subject_person_id: p_e8GwzBVysey3Kb4uNTABDK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬，明人物。天順元年進士，籍贯盧龍，曾任知事。（中国历代人物传记资料库 CBDB 296945）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Wnoytp-FiEyP4z9zJRxAZv
          claim_id: c_qJ7qfzQL7rBBap2A22eiuU
          source_id: s_HwM5bMkoywC5wSHBTt5VnK
          stance: supports
          locator: CBDB:296945
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_8n9uh0LHj6kH1tlFbUHbIb
        subject_person_id: p_e8GwzBVysey3Kb4uNTABDK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1vXY7qFFYMcnZjgBc9EDs8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wGQw8gHHlTbYM2qWCZ95RT
          claim_id: c_8n9uh0LHj6kH1tlFbUHbIb
          source_id: s_57kZAzZH2t6g4w3F4mdEPS
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第六十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_57kZAzZH2t6g4w3F4mdEPS
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 198633）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198633&o=json
            external_identifier: CBDB:198633
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.505Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1vXY7qFFYMcnZjgBc9EDs8
        status: active
        display_name: 王佐
        merged_into_person_id: null
    - claim:
        id: c_8CGdh8j9Cu-NnhREyfPapC
        subject_person_id: p_e8GwzBVysey3Kb4uNTABDK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5FmaUx5pBcmXKQcqQ78YJT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vyG_va6rp9Q-EgiJG2vwK1
          claim_id: c_8CGdh8j9Cu-NnhREyfPapC
          source_id: s_KKvfI3LgaCl6Xsoh7-cq2O
          stance: supports
          locator: CBDB：兄弟 王佐（198633）之父／母 王敬
          quotation: null
          interpretation_note: 由兄弟关系推断：王森 与 王佐 为同胞（CBDB 记「兄」），王佐 之父／母即 王森 之父／母。
          source:
            id: s_KKvfI3LgaCl6Xsoh7-cq2O
            source_type: api_record
            title: 中国历代人物传记资料库：王森（CBDB 297002）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297002&o=json
            external_identifier: CBDB:297002
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5FmaUx5pBcmXKQcqQ78YJT
        status: active
        display_name: 王森
        merged_into_person_id: null
    - claim:
        id: c_3nq1UVImw7u34yVvCJYZQm
        subject_person_id: p_e8GwzBVysey3Kb4uNTABDK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_K1Pw3mH4W16CQa58kxjMDx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R1J3Pm3TkqwqsZZNO9hmtR
          claim_id: c_3nq1UVImw7u34yVvCJYZQm
          source_id: s_3rPm-cJeYhbtL7rHJnlGky
          stance: supports
          locator: CBDB：兄弟 王佐（198633）之父／母 王敬
          quotation: null
          interpretation_note: 由兄弟关系推断：王榮 与 王佐 为同胞（CBDB 记「弟」），王佐 之父／母即 王榮 之父／母。
          source:
            id: s_3rPm-cJeYhbtL7rHJnlGky
            source_type: api_record
            title: 中国历代人物传记资料库：王榮（CBDB 296978）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296978&o=json
            external_identifier: CBDB:296978
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_K1Pw3mH4W16CQa58kxjMDx
        status: active
        display_name: 王榮
        merged_into_person_id: null
    - claim:
        id: c_sXdxG1NbEngTRgjYc2KEZk
        subject_person_id: p_e8GwzBVysey3Kb4uNTABDK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ReefGjaxLdLvD49RVzGPr4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HyOhz1x7BOATROFe_AVBzG
          claim_id: c_sXdxG1NbEngTRgjYc2KEZk
          source_id: s_AOa92-EOA1KRApV0gNVe_i
          stance: supports
          locator: CBDB：兄弟 王佐（198633）之父／母 王敬
          quotation: null
          interpretation_note: 由兄弟关系推断：王佑 与 王佐 为同胞（CBDB 记「兄」），王佐 之父／母即 王佑 之父／母。
          source:
            id: s_AOa92-EOA1KRApV0gNVe_i
            source_type: api_record
            title: 中国历代人物传记资料库：王佑（CBDB 297024）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297024&o=json
            external_identifier: CBDB:297024
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ReefGjaxLdLvD49RVzGPr4
        status: active
        display_name: 王佑
        merged_into_person_id: null
    - claim:
        id: c_keXfBw7UfU2n1neGLenAvl
        subject_person_id: p_e8GwzBVysey3Kb4uNTABDK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UuGXcDwknrKH31QUBdehui
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ei8KotkFZCnx4tPrF8k5t1
          claim_id: c_keXfBw7UfU2n1neGLenAvl
          source_id: s_oV-ycNjr4K7dXNExYQZNSW
          stance: supports
          locator: CBDB：兄弟 王佐（198633）之父／母 王敬
          quotation: null
          interpretation_note: 由兄弟关系推断：王傑 与 王佐 为同胞（CBDB 记「兄」），王佐 之父／母即 王傑 之父／母。
          source:
            id: s_oV-ycNjr4K7dXNExYQZNSW
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 297013）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297013&o=json
            external_identifier: CBDB:297013
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UuGXcDwknrKH31QUBdehui
        status: active
        display_name: 王傑
        merged_into_person_id: null
    - claim:
        id: c_Ew1HZdafLw0ctPYp2EFXNN
        subject_person_id: p_e8GwzBVysey3Kb4uNTABDK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XV2xTVa2MzpHGZnv5RX14j
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HVS1EzNCkx4cVGz1tJihFY
          claim_id: c_Ew1HZdafLw0ctPYp2EFXNN
          source_id: s_ulbykcTIDdfVW96rGvDpCp
          stance: supports
          locator: CBDB：兄弟 王佐（198633）之父／母 王敬
          quotation: null
          interpretation_note: 由兄弟关系推断：王剛 与 王佐 为同胞（CBDB 记「兄」），王佐 之父／母即 王剛 之父／母。
          source:
            id: s_ulbykcTIDdfVW96rGvDpCp
            source_type: api_record
            title: 中国历代人物传记资料库：王剛（CBDB 296991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296991&o=json
            external_identifier: CBDB:296991
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XV2xTVa2MzpHGZnv5RX14j
        status: active
        display_name: 王剛
        merged_into_person_id: null
    - claim:
        id: c_9LS0vLwyPPDSM8O0zbbFxb
        subject_person_id: p_e8GwzBVysey3Kb4uNTABDK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hxV5knL2LSSLdrEPUHGPS6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o4K8OP88q3uUjRy3VUAmi-
          claim_id: c_9LS0vLwyPPDSM8O0zbbFxb
          source_id: s_HoJU2Vkjme4UzRsF3Pjvs-
          stance: supports
          locator: CBDB：兄弟 王佐（198633）之父／母 王敬
          quotation: null
          interpretation_note: 由兄弟关系推断：王佶 与 王佐 为同胞（CBDB 记「兄」），王佐 之父／母即 王佶 之父／母。
          source:
            id: s_HoJU2Vkjme4UzRsF3Pjvs-
            source_type: api_record
            title: 中国历代人物传记资料库：王佶（CBDB 297035）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297035&o=json
            external_identifier: CBDB:297035
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hxV5knL2LSSLdrEPUHGPS6
        status: active
        display_name: 王佶
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王敬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬 | accepted |
| bio.summary | 王敬，明人物。天順元年進士，籍贯盧龍，曾任知事。（中国历代人物传记资料库 CBDB 296945） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_1vXY7qFFYMcnZjgBc9EDs8 | 王佐 | accepted |
| children | p_5FmaUx5pBcmXKQcqQ78YJT | 王森 | accepted |
| children | p_K1Pw3mH4W16CQa58kxjMDx | 王榮 | accepted |
| children | p_ReefGjaxLdLvD49RVzGPr4 | 王佑 | accepted |
| children | p_UuGXcDwknrKH31QUBdehui | 王傑 | accepted |
| children | p_XV2xTVa2MzpHGZnv5RX14j | 王剛 | accepted |
| children | p_hxV5knL2LSSLdrEPUHGPS6 | 王佶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王剛（CBDB 296991）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296991&o=json)
- [中国历代人物传记资料库：王佶（CBDB 297035）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297035&o=json)
- [中国历代人物传记资料库：王傑（CBDB 297013）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297013&o=json)
- [中国历代人物传记资料库：王敬（CBDB 296945）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296945&o=json)
- [中国历代人物传记资料库：王榮（CBDB 296978）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296978&o=json)
- [中国历代人物传记资料库：王森（CBDB 297002）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297002&o=json)
- [中国历代人物传记资料库：王佑（CBDB 297024）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297024&o=json)
- [中国历代人物传记资料库：王佐（CBDB 198633）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198633&o=json)
