---
schema: wang-person/v1
id: p_DNgcd12SMQT8sYhCTYL1PG
status: active
merged_into: null
display_name: 王祎
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eQoiXQ3RFIK3wzlNg0zZk0
        subject_person_id: p_DNgcd12SMQT8sYhCTYL1PG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祎（1321年—1373年），史料所见人物。本项目依据《王祎》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_GrGH2vskS8iI6Q_CCjVIOq
          claim_id: c_eQoiXQ3RFIK3wzlNg0zZk0
          source_id: s_W1kjo5RN2x5RDsfdWsS7S5
          stance: supports
          locator: Q15934970
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_W1kjo5RN2x5RDsfdWsS7S5
            source_type: api_record
            title: 维基数据：王祎（Q15934970）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15934970
            external_identifier: Q15934970
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:31.010Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_vF6c4sfNNuBCJTheT66aMA
        subject_person_id: p_DNgcd12SMQT8sYhCTYL1PG
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1321年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1321-01-01
            latest: 1321-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9Xk9nCMFXW4a2FhRrwKgy2
          claim_id: c_vF6c4sfNNuBCJTheT66aMA
          source_id: s_W1kjo5RN2x5RDsfdWsS7S5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_W1kjo5RN2x5RDsfdWsS7S5
            source_type: api_record
            title: 维基数据：王祎（Q15934970）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15934970
            external_identifier: Q15934970
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:31.010Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_qbnS6AGVP3jceXW47s6gN2
        subject_person_id: p_DNgcd12SMQT8sYhCTYL1PG
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1373年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1373-01-01
            latest: 1373-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_bgtYhyU2UvBEEKRHonsiLu
          claim_id: c_qbnS6AGVP3jceXW47s6gN2
          source_id: s_W1kjo5RN2x5RDsfdWsS7S5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_W1kjo5RN2x5RDsfdWsS7S5
            source_type: api_record
            title: 维基数据：王祎（Q15934970）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15934970
            external_identifier: Q15934970
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:31.010Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_eFj2pQ3MenTZVG3PiQJ54m
        subject_person_id: p_DNgcd12SMQT8sYhCTYL1PG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祎
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_AmyGxB71NRYqoJrt8sKRRK
          claim_id: c_eFj2pQ3MenTZVG3PiQJ54m
          source_id: s_W1kjo5RN2x5RDsfdWsS7S5
          stance: supports
          locator: Q15934970
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1beP87PDVV1UfJHcj6yTZy
        subject_person_id: p_NUMEEieJMa2uhPFskB3sYY
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_DNgcd12SMQT8sYhCTYL1PG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_65BL4qqum2CB9PkTfcY2JS
          claim_id: c_1beP87PDVV1UfJHcj6yTZy
          source_id: s_4oTeuBceGTsno3LaaghZqj
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：元人傳記資料索引
          source:
            id: s_4oTeuBceGTsno3LaaghZqj
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王良玉（10725）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10725&o=json
            external_identifier: CBDB:10725
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:46.146Z
            metadata_json: null
        - id: cs_CWGzLwp1ED7QE2pbBh4j1V
          claim_id: c_1beP87PDVV1UfJHcj6yTZy
          source_id: s_W1kjo5RN2x5RDsfdWsS7S5
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_W1kjo5RN2x5RDsfdWsS7S5
            source_type: api_record
            title: 维基数据：王祎（Q15934970）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15934970
            external_identifier: Q15934970
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:31.010Z
            metadata_json: null
        - id: cs_D8MXZ4Sm8UKGKkHLE67QC3
          claim_id: c_1beP87PDVV1UfJHcj6yTZy
          source_id: s_5P6ynLyeizyxJDYY5q99kV
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_5P6ynLyeizyxJDYY5q99kV
            source_type: api_record
            title: 维基数据：王良玉（Q45369207）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45369207
            external_identifier: Q45369207
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:12.820Z
            metadata_json: null
      object_person:
        id: p_NUMEEieJMa2uhPFskB3sYY
        status: active
        display_name: 王良玉
        merged_into_person_id: null
  children:
    - claim:
        id: c_YawskGmWaNNqJDecVABqDi
        subject_person_id: p_DNgcd12SMQT8sYhCTYL1PG
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_EPoEhnzxUXZ38QvoPDgs5s
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GABYfUzG4u1JRKPjTvDJNQ
          claim_id: c_YawskGmWaNNqJDecVABqDi
          source_id: s_bGXjMVpffDg5aNL8S5Rv3o
          stance: supports
          locator: 亲属关系：長子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_bGXjMVpffDg5aNL8S5Rv3o
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王褘（10726）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10726&o=json
            external_identifier: CBDB:10726
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:57.679Z
            metadata_json: null
        - id: cs_PFBH3RuZ5E3DZJGao65c57
          claim_id: c_YawskGmWaNNqJDecVABqDi
          source_id: s_zyC95qFrNP35eYAec1N57q
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_zyC95qFrNP35eYAec1N57q
            source_type: api_record
            title: 维基数据：王绶（Q45413315）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45413315
            external_identifier: Q45413315
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:07.031Z
            metadata_json: null
        - id: cs_TtBuqSeKAok5UZRRKHZMeE
          claim_id: c_YawskGmWaNNqJDecVABqDi
          source_id: s_W1kjo5RN2x5RDsfdWsS7S5
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_W1kjo5RN2x5RDsfdWsS7S5
            source_type: api_record
            title: 维基数据：王祎（Q15934970）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15934970
            external_identifier: Q15934970
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:31.010Z
            metadata_json: null
      object_person:
        id: p_EPoEhnzxUXZ38QvoPDgs5s
        status: active
        display_name: 王绶
        merged_into_person_id: null
    - claim:
        id: c_BhuXM8k22Mfk2EjBiHHtKm
        subject_person_id: p_DNgcd12SMQT8sYhCTYL1PG
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_ujxGmCBGatyUsmPNvx1eeB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8AwBDg2kYmauqvbYDWeQNr
          claim_id: c_BhuXM8k22Mfk2EjBiHHtKm
          source_id: s_bGXjMVpffDg5aNL8S5Rv3o
          stance: supports
          locator: 亲属关系：次子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_bGXjMVpffDg5aNL8S5Rv3o
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王褘（10726）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10726&o=json
            external_identifier: CBDB:10726
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:57.679Z
            metadata_json: null
        - id: cs_cpshXzPWtWA3DWpC6YMDAr
          claim_id: c_BhuXM8k22Mfk2EjBiHHtKm
          source_id: s_vS2t2ntyv7LmatgEDDuYin
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_vS2t2ntyv7LmatgEDDuYin
            source_type: api_record
            title: 维基数据：王绅（Q45413317）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45413317
            external_identifier: Q45413317
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:07.031Z
            metadata_json: null
        - id: cs_y2KWH9up24pxjUm8nqZEA3
          claim_id: c_BhuXM8k22Mfk2EjBiHHtKm
          source_id: s_W1kjo5RN2x5RDsfdWsS7S5
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_W1kjo5RN2x5RDsfdWsS7S5
            source_type: api_record
            title: 维基数据：王祎（Q15934970）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15934970
            external_identifier: Q15934970
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:31.010Z
            metadata_json: null
      object_person:
        id: p_ujxGmCBGatyUsmPNvx1eeB
        status: active
        display_name: 王绅
        merged_into_person_id: null
    - claim:
        id: c_B67gAIE_MvJjye8nKo2yad
        subject_person_id: p_DNgcd12SMQT8sYhCTYL1PG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xTfgwP195usJ93B9R8xhUq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_47Gi1l1JVHZrzDAW1sOhUh
          claim_id: c_B67gAIE_MvJjye8nKo2yad
          source_id: s_9UyeB-LrJ9vGwf2Y1yAJex
          stance: supports
          locator: CBDB 亲属：父（KinPerson 10725）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_9UyeB-LrJ9vGwf2Y1yAJex
            source_type: api_record
            title: 中国历代人物传记资料库：王補（CBDB 28107）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28107&o=json
            external_identifier: CBDB:28107
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xTfgwP195usJ93B9R8xhUq
        status: active
        display_name: 王補
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_imZaqKCriBUFBQ9NMMSjNW
        subject_person_id: p_Ae4mPuoq9HCc5nAbC92HVm
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_DNgcd12SMQT8sYhCTYL1PG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2gtawCpo1GQqc57W7K99dj
          claim_id: c_imZaqKCriBUFBQ9NMMSjNW
          source_id: s_bGXjMVpffDg5aNL8S5Rv3o
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_bGXjMVpffDg5aNL8S5Rv3o
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王褘（10726）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10726&o=json
            external_identifier: CBDB:10726
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:57.679Z
            metadata_json: null
        - id: cs_7pm64C3ciQzRRQsG1qE4SY
          claim_id: c_imZaqKCriBUFBQ9NMMSjNW
          source_id: s_W1kjo5RN2x5RDsfdWsS7S5
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_W1kjo5RN2x5RDsfdWsS7S5
            source_type: api_record
            title: 维基数据：王祎（Q15934970）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15934970
            external_identifier: Q15934970
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:31.010Z
            metadata_json: null
        - id: cs_iAJ9vnUr1auXQLAv98trYD
          claim_id: c_imZaqKCriBUFBQ9NMMSjNW
          source_id: s_cG26HhRBGUdLpNSBtczXX5
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_cG26HhRBGUdLpNSBtczXX5
            source_type: api_record
            title: 维基数据：何妙音（Q45413311）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45413311
            external_identifier: Q45413311
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:07.031Z
            metadata_json: null
      object_person:
        id: p_Ae4mPuoq9HCc5nAbC92HVm
        status: active
        display_name: 何妙音
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ceuhMPkpavM7KR1OJJG2qb
        subject_person_id: p_DNgcd12SMQT8sYhCTYL1PG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZQzQZXVugxhW1siLgRcKU4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ce42cE9bK09M-ubNhzSSEc
          claim_id: c_ceuhMPkpavM7KR1OJJG2qb
          source_id: s_E7-eoPJEXZ6RqCZKiuwzJS
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 10725 王良玉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_E7-eoPJEXZ6RqCZKiuwzJS
            source_type: api_record
            title: 中国历代人物传记资料库：王良珉（CBDB 28104）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28104&o=json
            external_identifier: CBDB:28104
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZQzQZXVugxhW1siLgRcKU4
        status: active
        display_name: 王良珉
        merged_into_person_id: null
---

# 王祎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王祎（1321年—1373年），史料所见人物。本项目依据《王祎》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1321年 | accepted |
| death.date | 1373年 | accepted |
| name.primary | 王祎 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NUMEEieJMa2uhPFskB3sYY | 王良玉 | accepted |
| children | p_EPoEhnzxUXZ38QvoPDgs5s | 王绶 | accepted |
| children | p_ujxGmCBGatyUsmPNvx1eeB | 王绅 | accepted |
| children | p_xTfgwP195usJ93B9R8xhUq | 王補 | accepted |
| spouses | p_Ae4mPuoq9HCc5nAbC92HVm | 何妙音 | accepted |
| other | p_ZQzQZXVugxhW1siLgRcKU4 | 王良珉 | accepted |

## 外部来源

- [维基数据：何妙音（Q45413311）](https://www.wikidata.org/wiki/Q45413311)
- [维基数据：王良玉（Q45369207）](https://www.wikidata.org/wiki/Q45369207)
- [维基数据：王绅（Q45413317）](https://www.wikidata.org/wiki/Q45413317)
- [维基数据：王绶（Q45413315）](https://www.wikidata.org/wiki/Q45413315)
- [维基数据：王祎（Q15934970）](https://www.wikidata.org/wiki/Q15934970)
- [中国历代人物传记资料库：王補（CBDB 28107）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28107&o=json)
- [中国历代人物传记资料库：王良珉（CBDB 28104）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28104&o=json)
- [CBDB 中国历代人物传记资料库：王褘（10726）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10726&o=json)
- [CBDB 中国历代人物传记资料库：王良玉（10725）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10725&o=json)
