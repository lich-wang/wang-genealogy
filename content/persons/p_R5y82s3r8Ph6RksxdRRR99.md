---
schema: wang-person/v1
id: p_R5y82s3r8Ph6RksxdRRR99
status: active
merged_into: null
display_name: 王彬
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8aRPYKNcpF4YUU4d8f7ckp
        subject_person_id: p_R5y82s3r8Ph6RksxdRRR99
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彬（278年—336年），史料所见人物。本项目依据《王彬》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_PJPgkNxD71qHY0kUYdcjdb
          claim_id: c_8aRPYKNcpF4YUU4d8f7ckp
          source_id: s_MSLWTYMMo3HjJXeTvwXQCJ
          stance: supports
          locator: Q15909509
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_MSLWTYMMo3HjJXeTvwXQCJ
            source_type: api_record
            title: 维基数据：王彬（Q15909509）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15909509
            external_identifier: Q15909509
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:49.429Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BD%AC_(%E6%99%8B%E6%9C%9D)
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9JMAYnVMKMqaemzM3B6twP
        subject_person_id: p_R5y82s3r8Ph6RksxdRRR99
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 278年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 0278-01-01
            latest: 0278-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RLpGtkUkL4FCkwqfRi8zBX
          claim_id: c_9JMAYnVMKMqaemzM3B6twP
          source_id: s_MSLWTYMMo3HjJXeTvwXQCJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_MSLWTYMMo3HjJXeTvwXQCJ
            source_type: api_record
            title: 维基数据：王彬（Q15909509）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15909509
            external_identifier: Q15909509
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:49.429Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BD%AC_(%E6%99%8B%E6%9C%9D)
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_JTPXi82Yq3L2Rbrrf6ec8b
        subject_person_id: p_R5y82s3r8Ph6RksxdRRR99
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 336年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0336-01-01
            latest: 0336-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_38BY1PYE8xnjuiDwPb4WLK
          claim_id: c_JTPXi82Yq3L2Rbrrf6ec8b
          source_id: s_MSLWTYMMo3HjJXeTvwXQCJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_MSLWTYMMo3HjJXeTvwXQCJ
            source_type: api_record
            title: 维基数据：王彬（Q15909509）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15909509
            external_identifier: Q15909509
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:49.429Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BD%AC_(%E6%99%8B%E6%9C%9D)
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_yTQ7c7e1mX5MN3WyHRAueS
        subject_person_id: p_R5y82s3r8Ph6RksxdRRR99
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彬
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_e9sMQLr9kymSVvij2vrbDu
          claim_id: c_yTQ7c7e1mX5MN3WyHRAueS
          source_id: s_MSLWTYMMo3HjJXeTvwXQCJ
          stance: supports
          locator: Q15909509
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_rfVrv5fmfLAcx2hjvG4Bnn
        subject_person_id: p_zgLSxM6Df6WmD94BCp19kQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_R5y82s3r8Ph6RksxdRRR99
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_pJf4c9wZPNVFXwwQj3G79W
          claim_id: c_rfVrv5fmfLAcx2hjvG4Bnn
          source_id: s_JoYRcM7YuJWxDJPSGzxAWK
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_JoYRcM7YuJWxDJPSGzxAWK
            source_type: api_record
            title: 維基數據：王正（Q22814789）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814789
            external_identifier: Q22814789
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:52.203Z
            metadata_json: null
        - id: cs_awR4tCHNHAcZ9HiPi8KoYG
          claim_id: c_rfVrv5fmfLAcx2hjvG4Bnn
          source_id: s_MSLWTYMMo3HjJXeTvwXQCJ
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_MSLWTYMMo3HjJXeTvwXQCJ
            source_type: api_record
            title: 维基数据：王彬（Q15909509）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15909509
            external_identifier: Q15909509
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:49.429Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BD%AC_(%E6%99%8B%E6%9C%9D)
        - id: cs_5zZBDLAG1rfqJgJdv7jp1K
          claim_id: c_rfVrv5fmfLAcx2hjvG4Bnn
          source_id: s_WUGDBD9YgdJyH7S1ZJAkW2
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王彬
          interpretation_note: null
          source:
            id: s_WUGDBD9YgdJyH7S1ZJAkW2
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:57.308Z
            metadata_json: null
      object_person:
        id: p_zgLSxM6Df6WmD94BCp19kQ
        status: active
        display_name: 王正
        merged_into_person_id: null
  children:
    - claim:
        id: c_uMGtLqyJqw2JF6DZfB7Pcz
        subject_person_id: p_R5y82s3r8Ph6RksxdRRR99
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dbMVR14eSfvq4n2oNDbSMq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_uLqHbWdcRJAvKy4JCCF9ZU
          claim_id: c_uMGtLqyJqw2JF6DZfB7Pcz
          source_id: s_MSLWTYMMo3HjJXeTvwXQCJ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_MSLWTYMMo3HjJXeTvwXQCJ
            source_type: api_record
            title: 维基数据：王彬（Q15909509）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15909509
            external_identifier: Q15909509
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:49.429Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BD%AC_(%E6%99%8B%E6%9C%9D)
        - id: cs_qMF1pnvvNY7YDz4GoQbpvY
          claim_id: c_uMGtLqyJqw2JF6DZfB7Pcz
          source_id: s_VaQN1gL5BjbuH7CyA7r2TJ
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_VaQN1gL5BjbuH7CyA7r2TJ
            source_type: api_record
            title: 维基数据：王彪之（Q15904931）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15904931
            external_identifier: Q15904931
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:49.009Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BD%AA%E4%B9%8B
        - id: cs_7b6zaV6EKZhnQwkdnzu5BK
          claim_id: c_uMGtLqyJqw2JF6DZfB7Pcz
          source_id: s_WUGDBD9YgdJyH7S1ZJAkW2
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王彪之（305年-377年），王彬第三子，字叔虎，小字虎犊，知名，东晋尚书令。
          interpretation_note: null
          source:
            id: s_WUGDBD9YgdJyH7S1ZJAkW2
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:57.308Z
            metadata_json: null
        - id: cs_YM1QRUffUKMUGXrGPsaVCx
          claim_id: c_uMGtLqyJqw2JF6DZfB7Pcz
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（二子）
          quotation: 二子：彭之、彪之
          interpretation_note: null
          source:
            id: s_XmK4uXKaoBAKcwvzzk8Dzr
            source_type: book
            title: 中文维基文库：新唐書/卷072中
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T10:12:55.026Z
            metadata_json: null
      object_person:
        id: p_dbMVR14eSfvq4n2oNDbSMq
        status: active
        display_name: 王彪之
        merged_into_person_id: null
    - claim:
        id: c_FmFGh5hcsZDAhrKDeiA57S
        subject_person_id: p_R5y82s3r8Ph6RksxdRRR99
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SwQAsLJPWNhpZD964WiCGH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_XrvKraNSvUbZ8L2NcG3F1g
          claim_id: c_FmFGh5hcsZDAhrKDeiA57S
          source_id: s_MSLWTYMMo3HjJXeTvwXQCJ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_MSLWTYMMo3HjJXeTvwXQCJ
            source_type: api_record
            title: 维基数据：王彬（Q15909509）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15909509
            external_identifier: Q15909509
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:49.429Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BD%AC_(%E6%99%8B%E6%9C%9D)
        - id: cs_XXMR5F2bAPxsJjzvHcAQsQ
          claim_id: c_FmFGh5hcsZDAhrKDeiA57S
          source_id: s_HjbGCeNnT14FyYfYYPNN2v
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_HjbGCeNnT14FyYfYYPNN2v
            source_type: api_record
            title: 维基数据：王興之（Q15935307）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15935307
            external_identifier: Q15935307
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:49.009Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%88%88%E4%B9%8B
        - id: cs_b1pQP9sLhNxEPgVKYqkMNB
          claim_id: c_FmFGh5hcsZDAhrKDeiA57S
          source_id: s_uYU8TFPLEz7smpCbbUttat
          stance: supports
          locator: 条文：之子/之女
          quotation: 东晋都亭肃侯王彬之子，官至征西大将军行参军，赣县令
          interpretation_note: null
          source:
            id: s_uYU8TFPLEz7smpCbbUttat
            source_type: website
            title: 中文维基百科：王興之
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%88%88%E4%B9%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:43.727Z
            metadata_json: null
        - id: cs_MQ8tps7R5RK4QW74DbjHKW
          claim_id: c_FmFGh5hcsZDAhrKDeiA57S
          source_id: s_s8JZTea7Rkn9auvteRsGQe
          stance: supports
          locator: 条文：之子/之女
          quotation: 东晋都亭肃侯王彬之子，官至征西大将军行参军，赣县令
          interpretation_note: null
          source:
            id: s_s8JZTea7Rkn9auvteRsGQe
            source_type: website
            title: 中文维基百科：王興之
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%88%88%E4%B9%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:53.459Z
            metadata_json: null
        - id: cs_RqDsuP7BmZy1Nmm4uCNJu8
          claim_id: c_FmFGh5hcsZDAhrKDeiA57S
          source_id: s_WUGDBD9YgdJyH7S1ZJAkW2
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王兴之（310年-340年），王彬子，东晋征西行参军。
          interpretation_note: null
          source:
            id: s_WUGDBD9YgdJyH7S1ZJAkW2
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:57.308Z
            metadata_json: null
      object_person:
        id: p_SwQAsLJPWNhpZD964WiCGH
        status: active
        display_name: 王興之
        merged_into_person_id: null
    - claim:
        id: c_1STkMmxuBdNRfftvHEv3h2
        subject_person_id: p_R5y82s3r8Ph6RksxdRRR99
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gCD2GDK6A4kzkP2Xc3aWB3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_24P2fA1tbpuFCxkNVJiF1n
          claim_id: c_1STkMmxuBdNRfftvHEv3h2
          source_id: s_MSLWTYMMo3HjJXeTvwXQCJ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_MSLWTYMMo3HjJXeTvwXQCJ
            source_type: api_record
            title: 维基数据：王彬（Q15909509）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15909509
            external_identifier: Q15909509
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:49.429Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BD%AC_(%E6%99%8B%E6%9C%9D)
        - id: cs_M4zzsbJSRq3bAo8JcT9UJN
          claim_id: c_1STkMmxuBdNRfftvHEv3h2
          source_id: s_GHgHH1y2ZZkykRTcrs57H4
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_GHgHH1y2ZZkykRTcrs57H4
            source_type: api_record
            title: 维基数据：王彭之（Q22815025）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22815025
            external_identifier: Q22815025
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:02.686Z
            metadata_json: null
        - id: cs_PULX1Jg5LaHh489zq9YfMZ
          claim_id: c_1STkMmxuBdNRfftvHEv3h2
          source_id: s_WUGDBD9YgdJyH7S1ZJAkW2
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王彭之
          interpretation_note: null
          source:
            id: s_WUGDBD9YgdJyH7S1ZJAkW2
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:57.308Z
            metadata_json: null
      object_person:
        id: p_gCD2GDK6A4kzkP2Xc3aWB3
        status: active
        display_name: 王彭之
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王彬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王彬（278年—336年），史料所见人物。本项目依据《王彬》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 278年 | accepted |
| death.date | 336年 | accepted |
| name.primary | 王彬 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zgLSxM6Df6WmD94BCp19kQ | 王正 | accepted |
| children | p_dbMVR14eSfvq4n2oNDbSMq | 王彪之 | accepted |
| children | p_SwQAsLJPWNhpZD964WiCGH | 王興之 | accepted |
| children | p_gCD2GDK6A4kzkP2Xc3aWB3 | 王彭之 | accepted |

## 外部来源

- [维基数据：王彪之（Q15904931）](https://www.wikidata.org/wiki/Q15904931)
- [维基数据：王彬（Q15909509）](https://www.wikidata.org/wiki/Q15909509)
- [维基数据：王彭之（Q22815025）](https://www.wikidata.org/wiki/Q22815025)
- [维基数据：王興之（Q15935307）](https://www.wikidata.org/wiki/Q15935307)
- [維基數據：王正（Q22814789）](https://www.wikidata.org/wiki/Q22814789)
- [中文维基百科：琅邪王氏](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F)
- [中文维基百科：王興之](https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%88%88%E4%B9%8B)
- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
