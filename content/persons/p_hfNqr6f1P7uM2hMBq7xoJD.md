---
schema: wang-person/v1
id: p_hfNqr6f1P7uM2hMBq7xoJD
status: active
merged_into: null
display_name: 王崇
revision: 11
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MQK8zcwGjUwHrrF4uP6s8A
        subject_person_id: p_hfNqr6f1P7uM2hMBq7xoJD
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
        - id: cs_k6PmnPPNLw7bgJKfGEzK7r
          claim_id: c_MQK8zcwGjUwHrrF4uP6s8A
          source_id: s_rVUUYi5Q8bixb6BEbrMtKa
          stance: supports
          locator: CBDB:227709
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（227709）
          source: &a1
            id: s_rVUUYi5Q8bixb6BEbrMtKa
            source_type: api_record
            title: 中国历代人物传记资料库：王崇（CBDB 227709）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227709&o=json
            external_identifier: CBDB:227709
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.513Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DGDM9KkNF952fRusjnQTjL
        subject_person_id: p_hfNqr6f1P7uM2hMBq7xoJD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇，明人物。萬曆丙戌科進士進士，籍贯蒙陰，曾任壽官。（中国历代人物传记资料库 CBDB 227709）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9nNEbXPSdVKjF8P3-Ll7GV
          claim_id: c_DGDM9KkNF952fRusjnQTjL
          source_id: s_rVUUYi5Q8bixb6BEbrMtKa
          stance: supports
          locator: CBDB:227709
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_5szM0xOixoWqRzEb6GyeBB
        subject_person_id: p_hfNqr6f1P7uM2hMBq7xoJD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UehS2yfTZaFGBh7uxhHFCE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7PWkk3D9x0o0ODoiI0nj_x
          claim_id: c_5szM0xOixoWqRzEb6GyeBB
          source_id: s_rVUUYi5Q8bixb6BEbrMtKa
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百三十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UehS2yfTZaFGBh7uxhHFCE
        status: active
        display_name: 王之翰
        merged_into_person_id: null
    - claim:
        id: c_QRRvraTDYMnfA06wZZY0cW
        subject_person_id: p_hfNqr6f1P7uM2hMBq7xoJD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_89h4Z952DsmUzHoDEqDXMB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2PoeLf3NtfdtImRZsrON7d
          claim_id: c_QRRvraTDYMnfA06wZZY0cW
          source_id: s_kEDSNcbIpcYpJspbyAqSR8
          stance: supports
          locator: CBDB：兄弟 王之翰（207104）之父／母 王崇
          quotation: null
          interpretation_note: 由兄弟关系推断：王之綱 与 王之翰 为同胞（CBDB 记「兄」），王之翰 之父／母即 王之綱 之父／母。
          source:
            id: s_kEDSNcbIpcYpJspbyAqSR8
            source_type: api_record
            title: 中国历代人物传记资料库：王之綱（CBDB 227721）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227721&o=json
            external_identifier: CBDB:227721
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_89h4Z952DsmUzHoDEqDXMB
        status: active
        display_name: 王之綱
        merged_into_person_id: null
    - claim:
        id: c_1aVQFtj4zvFLYSET4OlFVC
        subject_person_id: p_hfNqr6f1P7uM2hMBq7xoJD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CLYNKsxMjYcSw7B4aiXjMt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LzwY3PTzB911pwIRAKYzGN
          claim_id: c_1aVQFtj4zvFLYSET4OlFVC
          source_id: s_Swz8CDlZcwcaCV_mQ1G-Ph
          stance: supports
          locator: CBDB：兄弟 王之翰（207104）之父／母 王崇
          quotation: null
          interpretation_note: 由兄弟关系推断：王之賓 与 王之翰 为同胞（CBDB 记「弟」），王之翰 之父／母即 王之賓 之父／母。
          source:
            id: s_Swz8CDlZcwcaCV_mQ1G-Ph
            source_type: api_record
            title: 中国历代人物传记资料库：王之賓（CBDB 227712）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227712&o=json
            external_identifier: CBDB:227712
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CLYNKsxMjYcSw7B4aiXjMt
        status: active
        display_name: 王之賓
        merged_into_person_id: null
    - claim:
        id: c_K9c4oTIPPA0lBTcyyL6jBb
        subject_person_id: p_hfNqr6f1P7uM2hMBq7xoJD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Egi12iC89gN4vcmygRqSDu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VCagE46EA7AYvPqeQOz2C2
          claim_id: c_K9c4oTIPPA0lBTcyyL6jBb
          source_id: s_aRQ3zVNL-JVZGkY-NfHqw4
          stance: supports
          locator: CBDB：兄弟 王之翰（207104）之父／母 王崇
          quotation: null
          interpretation_note: 由兄弟关系推断：王之俊 与 王之翰 为同胞（CBDB 记「兄」），王之翰 之父／母即 王之俊 之父／母。
          source:
            id: s_aRQ3zVNL-JVZGkY-NfHqw4
            source_type: api_record
            title: 中国历代人物传记资料库：王之俊（CBDB 227720）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227720&o=json
            external_identifier: CBDB:227720
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Egi12iC89gN4vcmygRqSDu
        status: active
        display_name: 王之俊
        merged_into_person_id: null
    - claim:
        id: c_4ZtadL0bJgifjoa4pIhHjV
        subject_person_id: p_hfNqr6f1P7uM2hMBq7xoJD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_G5x61NsvfMQAvzBmPKJw9K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aJsw3vXlt-zbI47g30K-CE
          claim_id: c_4ZtadL0bJgifjoa4pIhHjV
          source_id: s_gXHubR_XCTdA_hbCb8njyj
          stance: supports
          locator: CBDB：兄弟 王之翰（207104）之父／母 王崇
          quotation: null
          interpretation_note: 由兄弟关系推断：王之臣 与 王之翰 为同胞（CBDB 记「弟」），王之翰 之父／母即 王之臣 之父／母。
          source:
            id: s_gXHubR_XCTdA_hbCb8njyj
            source_type: api_record
            title: 中国历代人物传记资料库：王之臣（CBDB 227713）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227713&o=json
            external_identifier: CBDB:227713
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_G5x61NsvfMQAvzBmPKJw9K
        status: active
        display_name: 王之臣
        merged_into_person_id: null
    - claim:
        id: c_TQLqD4ScmF5RqCJOk2vTjB
        subject_person_id: p_hfNqr6f1P7uM2hMBq7xoJD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_R6mQ37iqzhHKPsuanKKi1Q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_klMeeYgGudjyT9jztbCbrc
          claim_id: c_TQLqD4ScmF5RqCJOk2vTjB
          source_id: s_36JHtn9EmOR5K2egu-cJoi
          stance: supports
          locator: CBDB：兄弟 王之翰（207104）之父／母 王崇
          quotation: null
          interpretation_note: 由兄弟关系推断：王之佐 与 王之翰 为同胞（CBDB 记「兄」），王之翰 之父／母即 王之佐 之父／母。
          source:
            id: s_36JHtn9EmOR5K2egu-cJoi
            source_type: api_record
            title: 中国历代人物传记资料库：王之佐（CBDB 227718）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227718&o=json
            external_identifier: CBDB:227718
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_R6mQ37iqzhHKPsuanKKi1Q
        status: active
        display_name: 王之佐
        merged_into_person_id: null
    - claim:
        id: c_oklFsM7l9PO_MIddnwYDIy
        subject_person_id: p_hfNqr6f1P7uM2hMBq7xoJD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TsLpVMLYQQiMWwhB4Xsesx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QkH6todjPkvjz1iOxeh_ns
          claim_id: c_oklFsM7l9PO_MIddnwYDIy
          source_id: s_GVY079iB66agAT6S0KxcTB
          stance: supports
          locator: CBDB：兄弟 王之翰（207104）之父／母 王崇
          quotation: null
          interpretation_note: 由兄弟关系推断：王之相 与 王之翰 为同胞（CBDB 记「弟」），王之翰 之父／母即 王之相 之父／母。
          source:
            id: s_GVY079iB66agAT6S0KxcTB
            source_type: api_record
            title: 中国历代人物传记资料库：王之相（CBDB 227715）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227715&o=json
            external_identifier: CBDB:227715
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TsLpVMLYQQiMWwhB4Xsesx
        status: active
        display_name: 王之相
        merged_into_person_id: null
    - claim:
        id: c_E_1VJGYLtxuignzDNgb0yI
        subject_person_id: p_hfNqr6f1P7uM2hMBq7xoJD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nGPUpdu2RVweqwUZHLG6KZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J-2a-FZEWRKTzwxc_A_TBF
          claim_id: c_E_1VJGYLtxuignzDNgb0yI
          source_id: s_-M5GbKs-RTpWxNsceKqjvQ
          stance: supports
          locator: CBDB：兄弟 王之翰（207104）之父／母 王崇
          quotation: null
          interpretation_note: 由兄弟关系推断：王之卿 与 王之翰 为同胞（CBDB 记「弟」），王之翰 之父／母即 王之卿 之父／母。
          source:
            id: s_-M5GbKs-RTpWxNsceKqjvQ
            source_type: api_record
            title: 中国历代人物传记资料库：王之卿（CBDB 227714）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227714&o=json
            external_identifier: CBDB:227714
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nGPUpdu2RVweqwUZHLG6KZ
        status: active
        display_name: 王之卿
        merged_into_person_id: null
    - claim:
        id: c_QO6TllYHu2rr-btbw-fY70
        subject_person_id: p_hfNqr6f1P7uM2hMBq7xoJD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pZ7NoUVDv7MBBHg3mAofaZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sp0zTrelSATcecq5IPvh8x
          claim_id: c_QO6TllYHu2rr-btbw-fY70
          source_id: s_N0fe9EBjly586x6biTC84i
          stance: supports
          locator: CBDB：兄弟 王之翰（207104）之父／母 王崇
          quotation: null
          interpretation_note: 由兄弟关系推断：王之紀 与 王之翰 为同胞（CBDB 记「兄」），王之翰 之父／母即 王之紀 之父／母。
          source:
            id: s_N0fe9EBjly586x6biTC84i
            source_type: api_record
            title: 中国历代人物传记资料库：王之紀（CBDB 227722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227722&o=json
            external_identifier: CBDB:227722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pZ7NoUVDv7MBBHg3mAofaZ
        status: active
        display_name: 王之紀
        merged_into_person_id: null
    - claim:
        id: c_Jp6L84ml3DLRFnT7T8Ysan
        subject_person_id: p_hfNqr6f1P7uM2hMBq7xoJD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xWpD9HAvr5QaRKe9kR48Fw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T7aGSI3_YVaAA2F7mshhE0
          claim_id: c_Jp6L84ml3DLRFnT7T8Ysan
          source_id: s_x1H70BrUsGna9fTdONnYMu
          stance: supports
          locator: CBDB：兄弟 王之翰（207104）之父／母 王崇
          quotation: null
          interpretation_note: 由兄弟关系推断：王之屏 与 王之翰 为同胞（CBDB 记「兄」），王之翰 之父／母即 王之屏 之父／母。
          source:
            id: s_x1H70BrUsGna9fTdONnYMu
            source_type: api_record
            title: 中国历代人物传记资料库：王之屏（CBDB 227719）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227719&o=json
            external_identifier: CBDB:227719
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xWpD9HAvr5QaRKe9kR48Fw
        status: active
        display_name: 王之屏
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王崇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇 | accepted |
| bio.summary | 王崇，明人物。萬曆丙戌科進士進士，籍贯蒙陰，曾任壽官。（中国历代人物传记资料库 CBDB 227709） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_UehS2yfTZaFGBh7uxhHFCE | 王之翰 | accepted |
| children | p_89h4Z952DsmUzHoDEqDXMB | 王之綱 | accepted |
| children | p_CLYNKsxMjYcSw7B4aiXjMt | 王之賓 | accepted |
| children | p_Egi12iC89gN4vcmygRqSDu | 王之俊 | accepted |
| children | p_G5x61NsvfMQAvzBmPKJw9K | 王之臣 | accepted |
| children | p_R6mQ37iqzhHKPsuanKKi1Q | 王之佐 | accepted |
| children | p_TsLpVMLYQQiMWwhB4Xsesx | 王之相 | accepted |
| children | p_nGPUpdu2RVweqwUZHLG6KZ | 王之卿 | accepted |
| children | p_pZ7NoUVDv7MBBHg3mAofaZ | 王之紀 | accepted |
| children | p_xWpD9HAvr5QaRKe9kR48Fw | 王之屏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇（CBDB 227709）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227709&o=json)
- [中国历代人物传记资料库：王之賓（CBDB 227712）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227712&o=json)
- [中国历代人物传记资料库：王之臣（CBDB 227713）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227713&o=json)
- [中国历代人物传记资料库：王之綱（CBDB 227721）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227721&o=json)
- [中国历代人物传记资料库：王之紀（CBDB 227722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227722&o=json)
- [中国历代人物传记资料库：王之俊（CBDB 227720）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227720&o=json)
- [中国历代人物传记资料库：王之屏（CBDB 227719）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227719&o=json)
- [中国历代人物传记资料库：王之卿（CBDB 227714）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227714&o=json)
- [中国历代人物传记资料库：王之相（CBDB 227715）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227715&o=json)
- [中国历代人物传记资料库：王之佐（CBDB 227718）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227718&o=json)
