---
schema: wang-person/v1
id: p_MsHVjVc63eV8A8rm6FJdQR
status: active
merged_into: null
display_name: 王某
cbdb_id: 153872
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8t7SmdMiIB88KnXFl62-P9
        subject_person_id: p_MsHVjVc63eV8A8rm6FJdQR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王某，史料所见人物。本项目依据《王某》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__4-j6YSJE4umTcxXcoxxjE
          claim_id: c_8t7SmdMiIB88KnXFl62-P9
          source_id: s_68yxNaGUG8Ei3HCceKQwEh
          stance: supports
          locator: Q65805369
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_68yxNaGUG8Ei3HCceKQwEh
            source_type: api_record
            title: 维基数据：王某（Q65805369）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65805369
            external_identifier: Q65805369
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:15.108Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZWorYnY7PvPu7v21BQ7vBE
        subject_person_id: p_MsHVjVc63eV8A8rm6FJdQR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王某
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_qa9LNz1v1EgUGRxnuNaQRT
          claim_id: c_ZWorYnY7PvPu7v21BQ7vBE
          source_id: s_J6gDRaatX6skAwJ21qTHkA
          stance: supports
          locator: Q65805369
          quotation: null
          interpretation_note: null
          source:
            id: s_J6gDRaatX6skAwJ21qTHkA
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王某（153872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153872&o=json
            external_identifier: CBDB:153872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:10:15.266Z
            metadata_json: null
        - id: cs_t2NoQJKHy6CggWf4XF4E7K
          claim_id: c_ZWorYnY7PvPu7v21BQ7vBE
          source_id: s_68yxNaGUG8Ei3HCceKQwEh
          stance: supports
          locator: Q65805369
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_fgkrKCMezyBWzHKxEYqKKX
        subject_person_id: p_MsHVjVc63eV8A8rm6FJdQR
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_s92BnuiYU99B9CbbcpkN5z
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_Fiyc83k3t9ANPH9Pgzzr3D
          claim_id: c_fgkrKCMezyBWzHKxEYqKKX
          source_id: s_egtZh3vh3J3HT1dWkQDr59
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_egtZh3vh3J3HT1dWkQDr59
            source_type: api_record
            title: 维基数据：李氏（Q65803036）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65803036
            external_identifier: Q65803036
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:50:03.924Z
            metadata_json: null
        - id: cs_oJdoaDHhbM81gWdPy7PXGu
          claim_id: c_fgkrKCMezyBWzHKxEYqKKX
          source_id: s_oQtwPumURyxwA6cHx8wRTZ
          stance: supports
          locator: 亲属关系：丈夫
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_oQtwPumURyxwA6cHx8wRTZ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：李氏（140938）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140938&o=json
            external_identifier: CBDB:140938
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:04.054Z
            metadata_json: null
        - id: cs_B2NyNGNf7KuAb8Y8UNvcgj
          claim_id: c_fgkrKCMezyBWzHKxEYqKKX
          source_id: s_68yxNaGUG8Ei3HCceKQwEh
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_68yxNaGUG8Ei3HCceKQwEh
            source_type: api_record
            title: 维基数据：王某（Q65805369）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65805369
            external_identifier: Q65805369
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:15.108Z
            metadata_json: null
        - id: cs_B7UhmQcAtnjQtNP2C2vNoS
          claim_id: c_fgkrKCMezyBWzHKxEYqKKX
          source_id: s_J6gDRaatX6skAwJ21qTHkA
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_J6gDRaatX6skAwJ21qTHkA
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王某（153872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153872&o=json
            external_identifier: CBDB:153872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:10:15.266Z
            metadata_json: null
      object_person:
        id: p_s92BnuiYU99B9CbbcpkN5z
        status: active
        display_name: 李氏
        merged_into_person_id: null
    - claim:
        id: c_ilNB6gGXiRbLCNGzgWdFXT
        subject_person_id: p_s92BnuiYU99B9CbbcpkN5z
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_MsHVjVc63eV8A8rm6FJdQR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mUlBTBgZxhhttELlkmgSE9
          claim_id: c_ilNB6gGXiRbLCNGzgWdFXT
          source_id: s_oQtwPumURyxwA6cHx8wRTZ
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tianbao 134：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oQtwPumURyxwA6cHx8wRTZ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：李氏（140938）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140938&o=json
            external_identifier: CBDB:140938
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:04.054Z
            metadata_json: null
      object_person:
        id: p_s92BnuiYU99B9CbbcpkN5z
        status: active
        display_name: 李氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王某

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王某，史料所见人物。本项目依据《王某》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王某 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_s92BnuiYU99B9CbbcpkN5z | 李氏 | accepted |
| spouses | p_s92BnuiYU99B9CbbcpkN5z | 李氏 | accepted |

## 外部来源

- [维基数据：李氏（Q65803036）](https://www.wikidata.org/wiki/Q65803036)
- [维基数据：王某（Q65805369）](https://www.wikidata.org/wiki/Q65805369)
- [CBDB 中国历代人物传记资料库：李氏（140938）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140938&o=json)
- [CBDB 中国历代人物传记资料库：王某（153872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153872&o=json)
