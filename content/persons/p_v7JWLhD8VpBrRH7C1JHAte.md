---
schema: wang-person/v1
id: p_v7JWLhD8VpBrRH7C1JHAte
status: active
merged_into: null
display_name: 王氏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GQJ7KA5d2CpLhkiWHMkmDf
        subject_person_id: p_v7JWLhD8VpBrRH7C1JHAte
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JnSF2vHU44SH3Af4xTiUC1
          claim_id: c_GQJ7KA5d2CpLhkiWHMkmDf
          source_id: s_P4WdCsxRwaDnjL2NYiyCLu
          stance: supports
          locator: Q45364590
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_P4WdCsxRwaDnjL2NYiyCLu
            source_type: api_record
            title: 维基数据：王氏（Q45364590）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45364590
            external_identifier: Q45364590
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_pSQ9DJyrBXC57X3H8NuXvd
          claim_id: c_GQJ7KA5d2CpLhkiWHMkmDf
          source_id: s_4omL5U5d6KwGwQGFAUNoYN
          stance: supports
          locator: CBDB:5289
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_4omL5U5d6KwGwQGFAUNoYN
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王氏（5289）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5289&o=json
            external_identifier: CBDB:5289
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8mywxWndUiGv5Xu79352Qt
        subject_person_id: p_v7JWLhD8VpBrRH7C1JHAte
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 趙叔惠妻
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BPAG9QtTgdp1xaCBLDcTaa
          claim_id: c_8mywxWndUiGv5Xu79352Qt
          source_id: s_P4WdCsxRwaDnjL2NYiyCLu
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QzJLp8JYqK3BFQGaoJnJwD
        subject_person_id: p_v7JWLhD8VpBrRH7C1JHAte
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1047年
            calendar_note: 维基数据 P569 结构化日期，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pPivNLBpUhLuySPHwfPxPs
          claim_id: c_QzJLp8JYqK3BFQGaoJnJwD
          source_id: s_P4WdCsxRwaDnjL2NYiyCLu
          stance: supports
          locator: P569（出生日期）
          quotation: null
          interpretation_note: 维基数据 P569
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_B9bVfN4yZndq2ZmYpVND96
        subject_person_id: p_v7JWLhD8VpBrRH7C1JHAte
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1105年
            calendar_note: 维基数据 P570 结构化日期，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EE88gUnmgLYhstGFLHMVhA
          claim_id: c_B9bVfN4yZndq2ZmYpVND96
          source_id: s_P4WdCsxRwaDnjL2NYiyCLu
          stance: supports
          locator: P570（死亡日期）
          quotation: null
          interpretation_note: 维基数据 P570
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DAfNfAmm8K7fYxwV2gqrFc
        subject_person_id: p_FeTYKhXT263ArThLLQ1A9F
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_v7JWLhD8VpBrRH7C1JHAte
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DyRgw9eyzYKCfhvW83yrbg
          claim_id: c_DAfNfAmm8K7fYxwV2gqrFc
          source_id: s_P4WdCsxRwaDnjL2NYiyCLu
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_MSUMM7Zk76X2FJFuJPQMdb
          claim_id: c_DAfNfAmm8K7fYxwV2gqrFc
          source_id: s_AR4PsZDWVcPSsPLajb8s1c
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_AR4PsZDWVcPSsPLajb8s1c
            source_type: api_record
            title: 维基数据：王世彦（Q45387199）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387199
            external_identifier: Q45387199
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:16.211Z
            metadata_json: null
        - id: cs_9nHA44PzCFGKsygkfacAAR
          claim_id: c_DAfNfAmm8K7fYxwV2gqrFc
          source_id: s_99qRkLEE1MfJL4Ac6oWaJ8
          stance: supports
          locator: 亲属关系：女兒
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_99qRkLEE1MfJL4Ac6oWaJ8
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王世彥（17779）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17779&o=json
            external_identifier: CBDB:17779
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:16.361Z
            metadata_json: null
      object_person:
        id: p_FeTYKhXT263ArThLLQ1A9F
        status: active
        display_name: 王世彦
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王氏 | accepted |
| bio.summary | 趙叔惠妻 | accepted |
| birth.date | 1047年 | accepted |
| death.date | 1105年 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FeTYKhXT263ArThLLQ1A9F | 王世彦 | accepted |

## 外部来源

- [维基数据：王氏（Q45364590）](https://www.wikidata.org/wiki/Q45364590)
- [维基数据：王世彦（Q45387199）](https://www.wikidata.org/wiki/Q45387199)
- [CBDB 中国历代人物传记资料库：王氏（5289）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5289&o=json)
- [CBDB 中国历代人物传记资料库：王世彥（17779）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17779&o=json)
