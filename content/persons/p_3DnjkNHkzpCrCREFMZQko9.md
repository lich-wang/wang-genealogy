---
schema: wang-person/v1
id: p_3DnjkNHkzpCrCREFMZQko9
status: active
merged_into: null
display_name: 王畴
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qFQ8WmmLVQZ-eu50MVX4Y0
        subject_person_id: p_3DnjkNHkzpCrCREFMZQko9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王畴（11世纪—1065年），字景彝，曹州济阴（山东省菏泽市）人，北宋政治人物。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_4XKAYBaUQbzQc9p_5OteAH
          claim_id: c_qFQ8WmmLVQZ-eu50MVX4Y0
          source_id: s_ZoxjWBPsqjEltAjCfdbtNf
          stance: supports
          locator: 导言
          quotation: 王畴（11世纪—1065年），字景彝，曹州济阴（山东省菏泽市）人
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_ZoxjWBPsqjEltAjCfdbtNf
            source_type: website
            title: 中文维基百科：王畴
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%95%B4
            external_identifier: Q45359378
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_EwzSSVWgWTJHsrZR2w38tG
        subject_person_id: p_3DnjkNHkzpCrCREFMZQko9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 11世纪
            calendar_note: 维基数据 P569 结构化日期，精度：世纪
            earliest: 1001-01-01
            latest: 1100-12-31
            precision: century
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Xnm6UqbdX6BiYDA5ThVezt
          claim_id: c_EwzSSVWgWTJHsrZR2w38tG
          source_id: s_ELiqZd2sS2NQbJdSDmkM4M
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_ELiqZd2sS2NQbJdSDmkM4M
            source_type: api_record
            title: 维基数据：王畴（Q45359378）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359378
            external_identifier: Q45359378
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:49:47.458Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_eGvDj3mKjE67Boc5pb4BJ2
        subject_person_id: p_3DnjkNHkzpCrCREFMZQko9
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1065年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1065-01-01
            latest: 1065-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Hk1jfy7aSGNWYAFLjFqJGm
          claim_id: c_eGvDj3mKjE67Boc5pb4BJ2
          source_id: s_ELiqZd2sS2NQbJdSDmkM4M
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_ELiqZd2sS2NQbJdSDmkM4M
            source_type: api_record
            title: 维基数据：王畴（Q45359378）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359378
            external_identifier: Q45359378
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:49:47.458Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Mk2B9XJRHgECz7kYNo99oF
        subject_person_id: p_3DnjkNHkzpCrCREFMZQko9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王畴
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_fJXJ4cgToRk9Kg3QgB2ECL
          claim_id: c_Mk2B9XJRHgECz7kYNo99oF
          source_id: s_ELiqZd2sS2NQbJdSDmkM4M
          stance: supports
          locator: Q45359378
          quotation: null
          interpretation_note: null
          source:
            id: s_ELiqZd2sS2NQbJdSDmkM4M
            source_type: api_record
            title: 维基数据：王畴（Q45359378）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359378
            external_identifier: Q45359378
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:49:47.458Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Dvtrtq92DWLrWu2gHXVJ8r
        subject_person_id: p_bzLQoN2ZpVX483A1469wdm
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_3DnjkNHkzpCrCREFMZQko9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ekEdM9sdtqXPeGwcBWHxnS
          claim_id: c_Dvtrtq92DWLrWu2gHXVJ8r
          source_id: s_ELiqZd2sS2NQbJdSDmkM4M
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_ELiqZd2sS2NQbJdSDmkM4M
            source_type: api_record
            title: 维基数据：王畴（Q45359378）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359378
            external_identifier: Q45359378
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:49:47.458Z
            metadata_json: null
        - id: cs_gYg3JQSZefk9HCdJqLiHMY
          claim_id: c_Dvtrtq92DWLrWu2gHXVJ8r
          source_id: s_odQ2Hu8qEwheFZmNjMNAUX
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_odQ2Hu8qEwheFZmNjMNAUX
            source_type: api_record
            title: 维基数据：王博文（Q45359611）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359611
            external_identifier: Q45359611
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:49:52.672Z
            metadata_json: null
        - id: cs_zaSBgNkNVvE84eCvJ9h3n7
          claim_id: c_Dvtrtq92DWLrWu2gHXVJ8r
          source_id: s_H7a6surBJGmL2BrBfSHys5
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_H7a6surBJGmL2BrBfSHys5
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王博文（1860）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1860&o=json
            external_identifier: CBDB:1860
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:02:14.179Z
            metadata_json: null
      object_person:
        id: p_bzLQoN2ZpVX483A1469wdm
        status: active
        display_name: 王博文
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王畴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王畴（11世纪—1065年），字景彝，曹州济阴（山东省菏泽市）人，北宋政治人物。 | accepted |
| birth.date | 11世纪 | accepted |
| death.date | 1065年 | accepted |
| name.primary | 王畴 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_bzLQoN2ZpVX483A1469wdm | 王博文 | accepted |

## 外部来源

- [维基数据：王博文（Q45359611）](https://www.wikidata.org/wiki/Q45359611)
- [维基数据：王畴（Q45359378）](https://www.wikidata.org/wiki/Q45359378)
- [中文维基百科：王畴](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%95%B4)
- [CBDB 中国历代人物传记资料库：王博文（1860）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1860&o=json)
